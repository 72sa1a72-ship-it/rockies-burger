
// =========================================
// 1. الإعدادات الأساسية (رقم الواتساب ورسوم التوصيل)
// =========================================
// ⚠️ هام جداً: قم بتغيير هذا الرقم لرقم المطعم (بصيغة دولية بدون + أو أصفار)
const RESTAURANT_WHATSAPP_NUMBER = "201032423621"; 
// رسوم التوصيل (ضع 0 إذا كان التوصيل مجاني أو سيتم حسابه لاحقاً)
const DELIVERY_FEE = 30; 

// =========================================
// 2. بيانات المنيو (Menu Data)
// =========================================
const menuData = [
    // Breakfast
    { id: 'b1', name: 'Rokies Croissant Roast Beef', category: 'breakfast', desc: 'صلصة طماطم - خس فريش - صلصة أمريكان شيدر - روز بيف - قطعة كرواسون', price: 85, image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=500&auto=format&fit=crop' },
    { id: 'b2', name: 'Rokies Croissant Turkey', category: 'breakfast', desc: 'صلصة طماطم - خس فريش - صلصة أمريكان شيدر - تركي مدخن - قطعة كرواسون', price: 75, image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=500&auto=format&fit=crop' },
    { id: 'b3', name: 'Club Sandwich', category: 'breakfast', desc: 'صلصة طماطم - خس باتافيا - صلصة أمريكان شيدر - روز بيف - خبز توست - تركي مدخن', price: 95, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500&auto=format&fit=crop' },

    // Beef Burgers
    { id: 'bf1', name: 'Rokies Basic', category: 'beef-burgers', desc: 'خبز برجر - باتي برجر بيف - صلصة أمريكان شيدر - خس فريش - خيار مخلل - صوص بيزك روكيز', price: { single: 125, double: 202 }, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop' },
    { id: 'bf2', name: 'Rocky Cheese', category: 'beef-burgers', desc: 'خبز برجر - باتي برجر بيف - صلصة أمريكان شيدر - خس فريش - خيار مخلل - صوص شيدر', price: { single: 135, double: 202 }, image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=500&auto=format&fit=crop' },
    { id: 'bf3', name: 'Rokies King', category: 'beef-burgers', desc: 'خبز برجر - باتي برجر بيف - صلصة أمريكان شيدر - خس فريش - خيار مخلل - صوص بيزك روكيز - موزريلا ستيك', price: { single: 175, double: 241 }, image: 'https://images.unsplash.com/photo-1594212885917-703246f538a5?q=80&w=500&auto=format&fit=crop' },
    { id: 'bf4', name: 'The Outlaw', category: 'beef-burgers', desc: 'خبز برجر - باتي برجر بيف - صلصة أمريكان شيدر - خس فريش - خيار مخلل - صوص بيزك روكيز - لحم مدخن - مكسيكان هالينو فريش - سويت شيلي', price: { single: 165, double: 235 }, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500&auto=format&fit=crop' },
    { id: 'bf5', name: 'Basic Smash', category: 'beef-burgers', desc: 'خبز برجر - سماش برجر بيف - صلصة أمريكان شيدر - خس فريش - خيار مخلل - صوص شيدر', price: { single: 113, double: 156 }, image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=500&auto=format&fit=crop' },
    { id: 'bf6', name: 'Nash Smash', category: 'beef-burgers', desc: 'خبز برجر - سماش برجر بيف - صلصة أمريكان شيدر - خس فريش - خيار مخلل - ناشفل كراميلايز أونيون', price: { single: 123, double: 163 }, image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=500&auto=format&fit=crop' },

    // Chicken Tender
    { id: 'ct1', name: 'Rokies Tender', category: 'chicken-tender', desc: 'خبز برجر - تندر دجاج كرسبي ناشفل أو أوريجينال - شيدر - خس فريش - خيار مخلل - صوص بيزك روكيز', price: 145, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500&auto=format&fit=crop' },
    { id: 'ct2', name: 'Honey Glaze', category: 'chicken-tender', desc: 'خبز برجر - تندر دجاج كرسبي ناشفل أو أوريجينال - صوص هاي جليز - حلقة بصل - خس فريش - خيار مخلل - صوص بيزك روكيز', price: 155, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500&auto=format&fit=crop' },
    
    // Rockies Boxes
    { id: 'box1', name: 'Drumstick Box', category: 'rockies-boxes', desc: '8 دبابيس دجاج ناشفل - فرايز كبير - صوص شيدر كبير', price: 275, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500&auto=format&fit=crop' },
    { id: 'box2', name: 'Wings Box', category: 'rockies-boxes', desc: '12 جناح دجاج ناشفل - فرايز كبير - صوص شيدر كبير', price: 249, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500&auto=format&fit=crop' },
    { id: 'box3', name: 'Mix Box', category: 'rockies-boxes', desc: '3 قطع تندر دجاج - 4 دبابيس دجاج ناشفل - 6 قطع أجنحة - فرايز كبير - صوص شيدر كبير', price: 390, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500&auto=format&fit=crop' },

    // Loaded & Sides
    { id: 's1', name: 'Fries', category: 'sides', desc: 'بطاطس عادية', price: 39, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=500&auto=format&fit=crop' },
    { id: 's2', name: 'Wedges', category: 'sides', desc: 'قطع البطاطس الفريش المشوية بالزبدة والثوم مع التوابل', price: 42, image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=500&auto=format&fit=crop' },
    { id: 's3', name: 'Nash Chicken Fries', category: 'sides', desc: 'فرايز مع قطع الدجاج البوب كورن ناشفل واللحم المدخن مع صوص فايري وصوص شيدر', price: 115, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500&auto=format&fit=crop' },
    
    // Drinks (نماذج)
    { id: 'd1', name: 'Turkish Coffee', category: 'hot-drinks', desc: 'قهوة تركي', price: 37, image: 'https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?q=80&w=500&auto=format&fit=crop' },
    { id: 'd2', name: 'Mango Juice', category: 'fresh-juices', desc: 'عصير مانجو طازج', price: 65, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=500&auto=format&fit=crop' },
    { id: 'd3', name: 'Oreo Milkshake', category: 'milk-shakes', desc: 'ميلك شيك أوريو', price: 75, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500&auto=format&fit=crop' }
];

// =========================================
// 3. حالة التطبيق (State) وسلة المشتريات
// =========================================
let cart = JSON.parse(localStorage.getItem('rockiesCart')) || [];
let currentCategory = 'all';

// دوال مساعدة
const formatPrice = (price) => `${price} ج.م`;
const saveCart = () => localStorage.setItem('rockiesCart', JSON.stringify(cart));

// =========================================
// 4. عرض الفئات والمنتجات (Rendering)
// =========================================
const categoriesContainer = document.getElementById('categoriesContainer');
const productsGrid = document.getElementById('productsGrid');

// استخراج الفئات الفريدة من البيانات
function renderCategories() {
    const categories = ['all', ...new Set(menuData.map(item => item.category))];
    
    // أسماء الفئات بالعربي للعرض
    const categoryNames = {
        'all': 'الكل',
        'breakfast': 'إفطار',
        'beef-burgers': 'برجر لحمة',
        'chicken-tender': 'دجاج تندر',
        'rockies-boxes': 'بوكسات',
        'sides': 'مقبلات وإضافات',
        'hot-drinks': 'مشروبات ساخنة',
        'fresh-juices': 'عصائر فريش',
        'milk-shakes': 'ميلك شيك'
    };

    categoriesContainer.innerHTML = categories.map(cat => `
        <button class="category-chip ${cat === currentCategory ? 'active' : ''}" onclick="filterCategory('${cat}')">
            ${categoryNames[cat] || cat}
        </button>
    `).join('');
}

// تصفية الفئات
window.filterCategory = (cat) => {
    currentCategory = cat;
    renderCategories();
    renderProducts();
};

// عرض المنتجات
function renderProducts() {
    const filtered = currentCategory === 'all' ? menuData : menuData.filter(item => item.category === currentCategory);
    
    productsGrid.innerHTML = filtered.map(product => {
        // التحقق من وجود أحجام (مثل البرجر)
        const hasVariants = typeof product.price === 'object';
        const priceDisplay = hasVariants 
            ? `يبدأ من ${formatPrice(product.price.single)}` 
            : formatPrice(product.price);

        let variantHTML = '';
        if (hasVariants) {
            variantHTML = `
                <select id="variant-${product.id}" class="variants-select">
                    <option value="single" data-price="${product.price.single}">سنجل (${formatPrice(product.price.single)})</option>
                    <option value="double" data-price="${product.price.double}">دوبل (${formatPrice(product.price.double)})</option>
                </select>
            `;
        }

        return `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title" dir="ltr" style="text-align: right;">${product.name}</h3>
                    <p class="product-desc">${product.desc || ''}</p>
                    ${variantHTML}
                    <div class="product-footer">
                        <span class="product-price">${priceDisplay}</span>
                        <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">أضف للسلة</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// =========================================
// 5. إدارة السلة (Cart Logic)
// =========================================
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');

// فتح وقفل السلة
document.getElementById('cartBtn').addEventListener('click', () => {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
});

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
}
document.getElementById('closeCart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// إضافة للسلة
window.addToCart = (productId) => {
    const product = menuData.find(p => p.id === productId);
    const variantSelect = document.getElementById(`variant-${productId}`);
    
    let selectedVariant = null;
    let itemPrice = product.price;
    
    if (variantSelect) {
        selectedVariant = variantSelect.value;
        itemPrice = Number(variantSelect.options[variantSelect.selectedIndex].dataset.price);
    }

    // البحث عن العنصر في السلة (نفس المنتج ونفس الحجم)
    const existingItemIndex = cart.findIndex(item => item.id === productId && item.variant === selectedVariant);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            variant: selectedVariant,
            price: itemPrice,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} تمت إضافته!`);
};

// تحديث واجهة السلة
function updateCartUI() {
    // تحديث العداد
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;

    // تحديث القائمة
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">سلتك فارغة.. ابدأ الطلب دلوقتي!</p>`;
        cartTotalEl.textContent = formatPrice(0);
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        const variantName = item.variant === 'single' ? 'سنجل' : item.variant === 'double' ? 'دوبل' : '';

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name} <span style="color:#E5252A; font-size:0.8rem">${variantName}</span></div>
                    <div class="cart-item-price">${formatPrice(itemTotal)}</div>
                </div>
                <div class="cart-controls">
                    <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                    <button class="remove-btn" onclick="removeItem(${index})">&times;</button>
                </div>
            </div>
        `;
    }).join('');

    cartTotalEl.textContent = formatPrice(total);
}

// تعديل الكمية
window.updateQty = (index, change) => {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
};

// حذف عنصر
window.removeItem = (index) => {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
};

// =========================================
// 6. إتمام الطلب (Checkout & WhatsApp)
// =========================================
const checkoutModal = document.getElementById('checkoutModal');
const checkoutForm = document.getElementById('checkoutForm');

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return showToast('السلة فارغة!');
    
    // إغلاق السلة وفتح المودال
    closeCart();
    checkoutModal.classList.add('active');
    renderCheckoutSummary();
});

document.getElementById('closeCheckout').addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

// عرض ملخص الطلب في المودال
function renderCheckoutSummary() {
    const summaryContainer = document.getElementById('summaryItems');
    let subtotal = 0;

    summaryContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        const variantName = item.variant === 'single' ? 'سنجل' : item.variant === 'double' ? 'دوبل' : '';

        return `
            <div class="summary-item">
                <span>${item.name} ${variantName} × ${item.qty}</span>
                <span>${formatPrice(itemTotal)}</span>
            </div>
        `;
    }).join('');

    const finalTotal = subtotal + DELIVERY_FEE;
    document.getElementById('summaryTotal').textContent = formatPrice(finalTotal);
}

// إرسال الطلب عبر الواتساب
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const notes = document.getElementById('custNotes').value.trim();

    if (!name || !phone || !address) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }

    // بناء رسالة الواتساب
    let message = `*طلب جديد من ROCKIES BURGER*\n\n`;
    message += `*الاسم:* ${name}\n`;
    message += `*رقم الهاتف:* ${phone}\n`;
    message += `*العنوان:* ${address}\n`;
    if (notes) message += `*ملاحظات:* ${notes}\n`;
    message += `\n------------------------\n*تفاصيل الطلب:*\n`;

    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        const variantName = item.variant === 'single' ? '(سنجل)' : item.variant === 'double' ? '(دوبل)' : '';
        
        message += `▪️ ${item.name} ${variantName}\n`;
        message += `   الكمية: ${item.qty} × ${formatPrice(item.price)} = ${formatPrice(itemTotal)}\n`;
    });

    const finalTotal = subtotal + DELIVERY_FEE;
    
    message += `\n------------------------\n`;
    message += `*المجموع الفرعي:* ${formatPrice(subtotal)}\n`;
    message += `*رسوم التوصيل:* ${DELIVERY_FEE === 0 ? 'مجاني' : formatPrice(DELIVERY_FEE)}\n`;
    message += `*الإجمالي النهائي:* ${formatPrice(finalTotal)}\n\n`;
    message += `_يرجى تأكيد الطلب._`;

    // فتح واتساب
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // يمكنك اختيار تفريغ السلة هنا أو تركها للمستخدم
    // cart = []; saveCart(); updateCartUI(); checkoutModal.classList.remove('active');
});

// =========================================
// 7. Toast & Initialization
// =========================================
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// التشغيل الأولي عند تحميل الصفحة
function init() {
    renderCategories();
    renderProducts();
    updateCartUI();
}

document.addEventListener('DOMContentLoaded', init);