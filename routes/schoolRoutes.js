const express = require('express');
const { validationResult } = require('express-validator');
const db = require('../db');
const geolib = require('geolib');
const { validateAddSchool, validateListSchools } = require('../utils/validation');

const router = express.Router();

// POST /api/addSchool
router.post('/addSchool', validateAddSchool, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, address, latitude, longitude } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, parseFloat(latitude), parseFloat(longitude)]
    );
    res.status(201).json({ message: 'School added', schoolId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'DB Insertion Failed' });
  }
});

// GET /api/listSchools?lat=xx&lng=yy&
router.get('/listSchools', validateListSchools, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  
    const userLat = parseFloat(req.query.lat);
    const userLng = parseFloat(req.query.lng);
    const maxDistanceKm = parseFloat(req.query.maxDistanceKm) || null;
  
    try {
      
      const [schools] = await db.query('SELECT * FROM schools');
  
      // Step 2: Calculate distance from user and add to each school
      let schoolFetch = schools.map(school => {
        const distance = geolib.getDistance(
          { latitude: userLat, longitude: userLng },
          { latitude: school.latitude, longitude: school.longitude }
        ) / 1000; // convert to km
        return { ...school, distanceKm: distance };
      });
  
  
      if (maxDistanceKm) {
        schoolFetch = schoolFetch.filter(s => s.distanceKm <= maxDistanceKm);
      }
  
      // Step 4: Sort by nearest
      schoolFetch.sort((a, b) => a.distanceKm - b.distanceKm);
  
      res.json({
        total: schoolFetch.length,
        nearestSchool: schoolFetch[0] || null,
        results: schoolFetch,
      });
    } catch (err) {
      console.error('Error fetching schools:', err);
      res.status(500).json({ error: 'Failed to fetch schools' });
    }
  });
  


module.exports = router;
