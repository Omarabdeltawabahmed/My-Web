document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enterButton');
    const homeLink = document.getElementById('homeLink');
    const productsLink = document.getElementById('productsLink');
    const buttons = document.querySelectorAll('.add-to-cart');
    let total = 0;
    const cartItems = document.getElementById('cartItems');

    // إخفاء قسم المنتجات عند تحميل الصفحة الرئيسية
    document.getElementById('products').style.display = 'none';

    // عرض المنتجات عند الضغط على "الدخول إلى المتجر"
    enterButton.addEventListener('click', function() {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('products').style.display = 'flex'; // تعديل هنا
        document.getElementById('cart').classList.remove('hidden');
        document.getElementById('title').classList.add('hidden');
    });

    // العودة إلى الصفحة الرئيسية عند الضغط على "الرئيسية"
    homeLink.addEventListener('click', function() {
        document.getElementById('welcome').classList.remove('hidden');
        document.getElementById('title').classList.remove('hidden');
        document.getElementById('products').style.display = 'none';
        document.getElementById('cart').classList.add('hidden');
    });

    // عرض صفحة المنتجات عند الضغط على "منتجات"
    productsLink.addEventListener('click', function() {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('products').style.display = 'flex'; // تعديل هنا
        document.getElementById('cart').classList.remove('hidden');
        document.getElementById('title').classList.add('hidden');
    });

    // إضافة منتجات إلى السلة
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const price = parseInt(product.querySelector('.price').textContent, 10);
            const productName = product.querySelector('h3').textContent;
            total += price;

            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - ${price} جنيه`;
            cartItems.appendChild(listItem);

            document.getElementById('total').textContent = total;
            alert('تم اضافة المنتج الي قائمة المشتريات');
        });
    });

    // تأكيد الدفع
    document.getElementById('checkoutButton').addEventListener('click', function() {
            alert('شكراً لتسوقك! سيتم تأكيد الدفع الآن.');
            alert('خلينا نشوفك تاني')
        // يمكن إضافة كود هنا لتنفيذ عملية الدفع الفعلية
    });
});
