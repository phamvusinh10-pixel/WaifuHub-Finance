import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Sử dụng cấu hình của bạn
const firebaseConfig = {
  apiKey: "AIzaSyAipEyRdgKPSAYqq8vMi6HFlmttDp8E2q4",
  authDomain: "webcosplaycuatoi.firebaseapp.com",
  projectId: "webcosplaycuatoi",
  storageBucket: "webcosplaycuatoi.firebasestorage.app",
  messagingSenderId: "1051760144047",
  appId: "1:1051760144047:web:4aa73cae9ce1d643ce6e5a",
  measurementId: "G-P9KV24H1ZE"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore (để lưu dữ liệu chi tiêu)
export const db = getFirestore(app);