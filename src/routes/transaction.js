const transactionController = require('../controllers/transactionController');
const express = require('express'),
  router = express.Router(),
  { changeBalance, checkBalance, checkP2P, checkLogs } = require('../middleware');

router.get('/balance', [checkBalance], transactionController.getBalanceByUserId);
router.post('/enrollment', [changeBalance], transactionController.enrollmentByUserId);
router.post('/withdrawal', [changeBalance], transactionController.withdrawalByUserId);
router.post('/p2p', [checkP2P], transactionController.p2p);

router.get('/logs', [checkLogs], transactionController.getLogs);

router.get('/symbols', transactionController.getAllAvailableCurrencies);

module.exports = router;
