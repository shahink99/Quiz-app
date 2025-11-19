const questions = {
  level1: [
    {
      question: "کدام یک از انواع داده در JavaScript وجود دارد؟",
      options: ["String", "Integer", "Float", "Char"],
      answer: "String"
    },
    {
      question: "خروجی '2' + 2 در JavaScript چیست؟",
      options: ["4", "22", "NaN", "undefined"],
      answer: "22"
    },
    {
      question: "کدام کلمه کلیدی برای تعریف متغیر قابل تغییر استفاده می‌شود؟",
      options: ["const", "let", "static", "define"],
      answer: "let"
    },
    {
      question: "چه متدی برای اجرای کد پس از مدت زمان مشخص در JavaScript استفاده می‌شود؟",
      options: ["setTimeout", "setInterval", "clearInterval", "clearTimeout"],
      answer: "setTimeout"
    },
    {
      question: "کدام یک از این‌ها برای جلوگیری از تغییر مقادیر یک متغیر در JavaScript استفاده می‌شود؟",
      options: ["const", "var", "let", "static"],
      answer: "const"
    },
    {
      question: "کدام روش برای اضافه کردن یک عنصر جدید به انتهای آرایه در JavaScript استفاده می‌شود؟",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()"
    },
    {
      question: "کدام یک از این‌ها یک حلقه برای تکرار کد در JavaScript است؟",
      options: ["for", "while", "do-while", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "چه متدی برای تبدیل یک رشته به عدد در JavaScript استفاده می‌شود؟",
      options: ["parseFloat()", "parseInt()", "Number()", "toFixed()"],
      answer: "Number()"
    },
    {
      question: "کدام یک از این‌ها برای گرفتن تعداد عناصر یک آرایه در JavaScript استفاده می‌شود؟",
      options: ["length", "size", "count", "total"],
      answer: "length"
    },
    {
      question: "چه روشی برای حذف اولین عنصر یک آرایه استفاده می‌شود؟",
      options: ["shift()", "unshift()", "pop()", "push()"],
      answer: "shift()"
    },
    {
      question: "در JavaScript، کدام ویژگی برای تعیین نوع داده یک متغیر استفاده می‌شود؟",
      options: ["typeof", "instanceof", "dataType", "type"],
      answer: "typeof"
    },
    {
      question: "کدام یک از این‌ها متدهای برای تغییر محتوای یک عنصر HTML در JavaScript هستند؟",
      options: ["innerHTML", "textContent", "innerText", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "در JavaScript، کدام عملگر برای مقایسه دقیق دو مقدار استفاده می‌شود؟",
      options: ["==", "=", "===", "!="],
      answer: "==="
    },
    {
      question: "چه ویژگی‌ای در JavaScript برای جلوگیری از تغییر ویژگی‌های یک شیء استفاده می‌شود؟",
      options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.defineProperties()"],
      answer: "Object.freeze()"
    },
    {
      question: "چه متدی برای تغییر ویژگی‌های یک شیء در JavaScript استفاده می‌شود؟",
      options: ["Object.defineProperty", "Object.assign", "Object.create", "Object.defineProperties"],
      answer: "Object.defineProperty"
    },
    {
      question: "چه متدی برای حذف ویژگی از یک شیء استفاده می‌شود؟",
      options: ["delete", "remove", "clear", "undefine"],
      answer: "delete"
    },
    {
      question: "چه روشی برای متوقف کردن یک تابع از اجرا بعد از زمان مشخص در JavaScript وجود دارد؟",
      options: ["clearTimeout()", "clearInterval()", "setInterval()", "stop()"],
      answer: "clearTimeout()"
    },
    {
      question: "کدام متد برای تبدیل یک رشته به عدد صحیح در JavaScript استفاده می‌شود؟",
      options: ["parseInt()", "parseFloat()", "toFixed()", "Math.round()"],
      answer: "parseInt()"
    },
    {
      question: "در JavaScript، کدام ویژگی برای تبدیل یک شیء به آرایه استفاده می‌شود؟",
      options: ["Object.keys()", "Object.values()", "Object.entries()", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "کدام ویژگی از اشیاء در JavaScript برای پیگیری مکان و زمان ایجاد یک شیء استفاده می‌شود؟",
      options: ["Date.now", "Object.keys", "Object.create", "Date"],
      answer: "Date.now"
    },
    {
      question: "در جاوااسکریپت، چه متدی برای ذخیره‌سازی داده‌ها در حافظه موقت مرورگر وجود دارد؟",
      options: ["sessionStorage", "localStorage", "cookieStorage", "memoryStorage"],
      answer: "localStorage"
    }
  ],
  level2: [
    {
      question: "در JavaScript، کدام متد برای تبدیل رشته به عدد صحیح استفاده می‌شود؟",
      options: ["parseFloat()", "parseInt()", "Number()", "toFixed()"],
      answer: "parseInt()"
    },
    {
      question: "چه ویژگی‌ای در JavaScript برای جلوگیری از تغییر ویژگی‌های یک شیء استفاده می‌شود؟",
      options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.defineProperties()"],
      answer: "Object.freeze()"
    },
    {
      question: "در JavaScript، کدام عملگر برای مقایسه دقیق دو مقدار استفاده می‌شود؟",
      options: ["==", "=", "===", "!="],
      answer: "==="
    },
    {
      question: "چه متدی برای حذف اولین عنصر یک آرایه استفاده می‌شود؟",
      options: ["shift()", "unshift()", "pop()", "push()"],
      answer: "shift()"
    },
    {
      question: "کدام یک از این‌ها متدهای جاوااسکریپت برای مدیریت شیءهای تاریخ هستند؟",
      options: ["Date()", "new Date()", "getDate()", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "کدام ویژگی از اشیاء در JavaScript برای پیگیری مکان و زمان ایجاد یک شیء استفاده می‌شود؟",
      options: ["Date.now", "Object.keys", "Object.create", "Date"],
      answer: "Date.now"
    },
    {
      question: "چه روشی برای ثبت خطا در JavaScript وجود دارد؟",
      options: ["console.log()", "console.error()", "throw", "try-catch"],
      answer: "throw"
    },
    {
      question: "کدام متد برای تغییر ویژگی‌های یک شیء در JavaScript استفاده می‌شود؟",
      options: ["Object.defineProperty", "Object.assign", "Object.create", "Object.defineProperties"],
      answer: "Object.defineProperty"
    },
    {
      question: "در JavaScript، کدام ویژگی برای تبدیل یک شیء به آرایه استفاده می‌شود؟",
      options: ["Object.keys()", "Object.values()", "Object.entries()", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "در جاوااسکریپت، چه متدی برای ذخیره‌سازی داده‌ها در حافظه موقت مرورگر وجود دارد؟",
      options: ["sessionStorage", "localStorage", "cookieStorage", "memoryStorage"],
      answer: "localStorage"
    },
    {
      question: "کدام روش برای ایجاد شیء جدید از یک شیء موجود استفاده می‌شود؟",
      options: ["Object.create()", "Object.define()", "Object.assign()", "new Object()"],
      answer: "Object.create()"
    },
    {
      question: "چه ویژگی‌ای در JavaScript برای بررسی موجود بودن یک شیء استفاده می‌شود؟",
      options: ["hasOwnProperty", "isPrototypeOf", "Object.keys", "Object.is"],
      answer: "hasOwnProperty"
    },
    {
      question: "چه روشی برای حذف ویژگی از یک شیء استفاده می‌شود؟",
      options: ["delete", "remove", "clear", "undefine"],
      answer: "delete"
    },
    {
      question: "در JavaScript، کدام ویژگی برای تعیین نوع داده یک متغیر استفاده می‌شود؟",
      options: ["typeof", "instanceof", "dataType", "type"],
      answer: "typeof"
    },
    {
      question: "کدام یک از این‌ها متدهای جاوااسکریپت برای مدیریت شیءهای تاریخ هستند؟",
      options: ["Date()", "new Date()", "getDate()", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "در JavaScript، کدام ویژگی برای تبدیل یک شیء به آرایه استفاده می‌شود؟",
      options: ["Object.keys()", "Object.values()", "Object.entries()", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "کدام یک از این‌ها برای تغییر ویژگی‌های یک شیء در JavaScript استفاده می‌شود؟",
      options: ["Object.defineProperty", "Object.assign", "Object.create", "Object.defineProperties"],
      answer: "Object.defineProperty"
    },
    {
      question: "کدام یک از این‌ها ویژگی‌های داده‌ها در JavaScript است؟",
      options: ["string", "number", "boolean", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "چه ویژگی‌ای در JavaScript برای بررسی موجود بودن یک شیء استفاده می‌شود؟",
      options: ["hasOwnProperty", "isPrototypeOf", "Object.keys", "Object.is"],
      answer: "hasOwnProperty"
    },
    {
      question: "چه روشی برای متوقف کردن یک تابع از اجرا بعد از زمان مشخص در JavaScript وجود دارد؟",
      options: ["clearTimeout()", "clearInterval()", "setInterval()", "stop()"],
      answer: "clearTimeout()"
    }
  ],
  
  level3: [
    {
      question: "در JavaScript، چه روش برای ایجاد شیء جدید از یک شیء موجود استفاده می‌شود؟",
      options: ["Object.create()", "Object.define()", "Object.assign()", "new Object()"],
      answer: "Object.create()"
    },
    {
      question: "چه روشی برای حذف ویژگی از یک شیء استفاده می‌شود؟",
      options: ["delete", "remove", "clear", "undefine"],
      answer: "delete"
    },
    {
      question: "کدام ویژگی در JavaScript برای تبدیل یک شیء به آرایه استفاده می‌شود؟",
      options: ["Object.keys()", "Object.values()", "Object.entries()", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "چه متدی برای تغییر ویژگی‌های یک شیء در JavaScript استفاده می‌شود؟",
      options: ["Object.defineProperty", "Object.assign", "Object.create", "Object.defineProperties"],
      answer: "Object.defineProperty"
    },
    {
      question: "چه ویژگی‌ای در JavaScript برای بررسی موجود بودن یک شیء استفاده می‌شود؟",
      options: ["hasOwnProperty", "isPrototypeOf", "Object.keys", "Object.is"],
      answer: "hasOwnProperty"
    },
    {
      question: "کدام یک از این‌ها برای دسترسی به ویژگی‌های داخلی یک شیء استفاده می‌شود؟",
      options: ["Object.getOwnPropertyDescriptor", "Object.getPrototypeOf", "Object.defineProperty", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "در جاوااسکریپت، چه متدی برای ذخیره‌سازی داده‌ها در حافظه موقت مرورگر وجود دارد؟",
      options: ["sessionStorage", "localStorage", "cookieStorage", "memoryStorage"],
      answer: "localStorage"
    },
    {
      question: "در JavaScript، کدام ویژگی برای تبدیل یک شیء به آرایه استفاده می‌شود؟",
      options: ["Object.keys()", "Object.values()", "Object.entries()", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "چه روشی برای متوقف کردن یک تابع از اجرا بعد از زمان مشخص در JavaScript وجود دارد؟",
      options: ["clearTimeout()", "clearInterval()", "setInterval()", "stop()"],
      answer: "clearTimeout()"
    },
    {
      question: "کدام یک از این‌ها ویژگی‌های داده‌ها در JavaScript است؟",
      options: ["string", "number", "boolean", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "چه ویژگی‌ای در JavaScript برای جلوگیری از تغییر ویژگی‌های یک شیء استفاده می‌شود؟",
      options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.defineProperties()"],
      answer: "Object.freeze()"
    },
    {
      question: "کدام یک از این‌ها برای تبدیل یک عدد به رشته در JavaScript استفاده می‌شود؟",
      options: ["String()", "toString()", "Number()", "parseFloat()"],
      answer: "String()"
    },
    {
      question: "کدام یک از این‌ها برای ذخیره داده‌ها به صورت موقت در مرورگر استفاده می‌شود؟",
      options: ["localStorage", "sessionStorage", "cookie", "indexedDB"],
      answer: "sessionStorage"
    },
    {
      question: "در JavaScript، متدهای Object برای انجام چه کارهایی استفاده می‌شوند؟",
      options: ["تغییر ویژگی‌ها", "دسترسی به ویژگی‌ها", "حذف ویژگی‌ها", "همه موارد"],
      answer: "همه موارد"
    },
    {
      question: "کدام یک از این‌ها به عنوان ویژگی اصلی برنامه‌نویسی شیءگرا در JavaScript شناخته می‌شود؟",
      options: ["وراثت", "مقداردهی", "اجرا", "مدیریت حافظه"],
      answer: "وراثت"
    },
    {
      question: "چه ویژگی‌ای در JavaScript برای جلوگیری از تغییر ویژگی‌های یک شیء استفاده می‌شود؟",
      options: ["Object.freeze()", "Object.preventExtensions()", "Object.seal()", "Object.defineProperty()"],
      answer: "Object.preventExtensions()"
    },
    {
      question: "چه کلمه کلیدی در JavaScript برای ایجاد متغیرهای سراسری استفاده می‌شود؟",
      options: ["var", "let", "const", "function"],
      answer: "var"
    },
    {
      question: "چه ویژگی‌ای برای پیگیری تاریخ و زمان در JavaScript استفاده می‌شود؟",
      options: ["Date()", "new Date()", "getDate()", "setDate()"],
      answer: "new Date()"
    },
    {
      question: "کدام متد برای ارزیابی برابر بودن دو شیء در JavaScript استفاده می‌شود؟",
      options: ["==", "===", "Object.is()", "Object.equals()"],
      answer: "Object.is()"
    },
    {
      question: "در JavaScript، کدام ویژگی برای جلوگیری از تغییر ویژگی‌های یک شیء استفاده می‌شود؟",
      options: ["Object.seal()", "Object.freeze()", "Object.preventExtensions()", "Object.defineProperty()"],
      answer: "Object.freeze()"
    },
    {
      question: "کدام یک از این‌ها متدهایی است که برای جلوگیری از تغییر خصوصیات شیء در JavaScript استفاده می‌شود؟",
      options: ["Object.preventExtensions()", "Object.freeze()", "Object.seal()", "همه موارد"],
      answer: "همه موارد"
    }
  ]
};