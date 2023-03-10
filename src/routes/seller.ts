import express, { Router, Request, Response } from 'express';
import { verifySellerToken } from '../auth/sellerAuth';
// import {upload} from '../images2/uploads';

import multer from 'multer';
const upload = multer({ dest: 'uploads/ '})
import { 
    deleteAccount,
    getSellerAccount,
    loginSeller, 
    signUpSeller, 
    updateSellerAccount,
    updateSellerPassword,
    uploadSellerImage
} from '../controllers/seller';

const router: Router = express.Router();

router.post('/signup', signUpSeller);
router.post('/login', loginSeller);
router.put('/update_account', verifySellerToken, updateSellerAccount);
router.get('/get_account', verifySellerToken, getSellerAccount);
router.delete('/delete_account', verifySellerToken, deleteAccount);
router.post('/upload-image', verifySellerToken,  upload.single('image'), uploadSellerImage);
router.put('/update_password', verifySellerToken, updateSellerPassword)

export default router;