import React from 'react';
import { Button, Card, Modal, Tabs, Avatar, Popover } from 'nawahui';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>معاينة مكونات مكتبة <span style={{ color: '#e3b505' }}>nawahui</span></h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>الأزرار (Buttons)</h2>
        <Button style={{ marginRight: '1rem' }}>زر أساسي</Button>
        <Button style={{ marginRight: '1rem', backgroundColor: '#28a745' }}>زر نجاح</Button>
        <Button style={{ backgroundColor: '#dc3545' }}>زر تحذير</Button>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>البطاقات (Cards)</h2>
        <Card>
          <h3>عنوان البطاقة</h3>
          <p>هذه بطاقة من المكتبة مع نص تجريبي.</p>
        </Card>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>التبويبات (Tabs)</h2>
        <Tabs tabs={['تبويب 1', 'تبويب 2', 'تبويب 3']} />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>الأفاتار (Avatar)</h2>
        <Avatar src="https://via.placeholder.com/100" alt="User" />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>البوب أوفر (Popover)</h2>
        <Popover content="هذه رسالة منبثقة عند المرور">
          <Button>مرر الفأرة هنا</Button>
        </Popover>
      </section>

      <section>
        <h2>النوافذ المنبثقة (Modal)</h2>
        <Modal trigger={<Button>افتح النافذة</Button>}>
          <h3>مرحبًا بك</h3>
          <p>هذا مثال على نافذة منبثقة من مكتبة nawahui.</p>
        </Modal>
      </section>
    </div>
  );
}