# AI Growth Email Automation 

## 📧 Proje Özeti
 n8n kullanarak geliştirilen email otomasyon sistemi. Manuel email hazırlama sürecini otomatikleştirerek %80 zaman tasarrufu sağlar.

## 🎯 Proje Gereksinimleri
- ✅ n8n ile email otomasyon sistemi
- ✅ Google Sheets entegrasyonu
- ✅ Segment bazlı email şablonları (A, B, C)
- ✅ Zaman bazlı otomatik gönderim (2, 5, 8 gün)
- ✅ Email açılma ve link tıklama takibi
- ✅ Google Apps Script tracking sistemi

## 📁 Dosyalar
- `My workflow.json` - n8n otomasyon iş akışı
- `google-apps-script-tracking.js` - Email takip sistemi
- `SerdarŞahin_EmailOtomasyonCase.docx` - Detaylı proje raporu
- `google-sheets-link.txt` - Google Sheets paylaşım linki

## 🚀 Kurulum
1. n8n'e workflow'u import edin
2. Google Apps Script'i deploy edin
3. Google Sheets'i paylaşın
4. Gmail API bağlantısını kurun

## 📊 Sonuçlar
- Email hazırlama süresinde %80 azalma
- Segment bazlı kişiselleştirme
- Otomatik takip sistemi
- Detaylı performans analizi

## ��️ Kullanılan Teknolojiler
- n8n (ücretsiz sürüm)
- Google Sheets
- Google Apps Script
- Gmail API

## �� Beklenen Etkiler
- Dönüşüm oranlarında %15-20 artış potansiyeli
- Takip sürecinde tutarlılık
- Manuel süreçlerin otomatikleştirilmesi

## �� Sistem Görselleri
### �� Ana Workflow
![n8n Workflow](ScreenShots/workflow.jpg)
*n8n ana otomasyon iş akışı - Schedule trigger, Google Sheets bağlantısı, segment filtreleri*

### �� Segment Filtreleri
![If Nodes](ScreenShots/if.jpg)
*Segment A, B, C için If node'ları - Müşteri gruplarını filtreleme*

### 💻 Kod İşlemleri
![Code Node](ScreenShots/code.jpg)
*Code node'ları - Zaman hesaplama ve email gönderim mantığı*

### ✅ Email Gönderim Kontrolü
![If3 Node](ScreenShots/if3.jpg)
*Email gönderim kontrolü - emailGonder filtresi*

### 📊 Google Sheets Entegrasyonu
![Google Sheets](ScreenShots/rowinsheet.jpg)
*Google Sheets veri çekme ve güncelleme işlemleri*

### ✏️ Veri Düzenleme
![Edit Fields](ScreenShots/editfields.jpg)
*Email içeriği ve konu düzenleme*

### �� Email Gönderimi
![Send Message](ScreenShots/sendmessage.jpg)
*Gmail API ile email gönderim*
