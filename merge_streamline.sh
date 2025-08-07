#!/bin/bash

# اسم ملف ZIP
ZIP_FILE="nawah-streamline-ui.zip"

# فك ضغط الملف
echo "فك ضغط الملف..."
unzip -o "$ZIP_FILE" -d ./streamline_temp

# دمج الملفات من المجلد المؤقت إلى مجلد المشروع الحالي
echo "دمج المحتويات..."
cp -r ./streamline_temp/* .

# إزالة المجلد المؤقت بعد الدمج
rm -rf ./streamline_temp

# إضافة التغييرات إلى git
echo "إضافة التغييرات إلى Git..."
git add .

# عمل commit برسالة توضح الدمج
git commit -m "دمج واجهة streamline مع مشروع نواة UI"

# دفع التغييرات إلى الفرع الرئيسي (main)
echo "دفع التغييرات إلى GitHub..."
git push origin main

echo "تم الانتهاء بنجاح!"
