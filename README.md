# Tic-Tac-Toe

## install and run

1. ดาวน์โหลดไฟล์ทั้งหมด HTML, CSS, และ JavaScript.
2. เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์.

## play

- ผู้เล่น X เริ่มเป็นคนแรกตามด้วย O
- คลิกเลือกช่องที่ต้องการเพื่อวางตัวเครื่องหมายของคุณ (X หรือ O)
- ฝ่ายที่สามารถวางเครื่องหมายได้ 3 ตัวในแนวนอน แนวตั้ง หรือแนวทแยง ได้ก่อนจะเป็นฝ่ายชนะ
- เมื่อเกมสิ้นสุด ผู้เล่นจะได้รับการแจ้งเตือนเกี่ยวกับผลลัพธ์
-  สามารถดูผลย้อนหลังได้ว่าฝ่ายไหนเป็นฝ่ายชนะ

## design method

- ใช้ HTML สร้างโครงสร้างหน้าเว็บและตาราง 9 ช่อง
- ใช้ CSS เพื่อตกแต่งหน้าเว็บปรับขนาดตาราง
-  สร้างอาร์เรย์เก็บรูปแบบของการชนะทั้งหมดที่เป็นไปได้
-  ใช้ JavaScript ในการเพิ่มเครื่องหมาย X และ O ลงในตารางทีละตัวและเช็คว่ามีฝ่ายไหนที่วางเครื่องหมายได้ 3 ตัวในแนวนอน แนวตั้ง หรือแนวทแยงตามอาร์เรย์ที่เก็บการชนะทั้งหมดได้ก่อนจะเป็นฝ่ายชนะ
-  หากเพิ่มเครื่องหมาย X และ O ลงจนเต็มตารางทั้ง 9 ช่องแสดงว่าทั้งสองฝ่ายเสมอกัน
