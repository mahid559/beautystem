const fs = require('fs');

function cleanHtml(html, currentPage) {
  let out = html
    .replace(/href="\/pages\/science"/g, 'href="science.html"')
    .replace(/href="\/pages\/us"/g, 'href="us.html"')
    .replace(/href="\/pages\/shop"/g, 'href="shop.html"')
    .replace(/href="\/"/g, 'href="index.html"')
    .replace(/href="\/products\/hydra-foam-cleanser"/g, 'href="products/hydra-foam-cleanser.html"')
    .replace(/href="\/products\/reset-serum"/g, 'href="products/reset-serum.html"')
    .replace(/href="\/products\/lash-and-eye-conditioner"/g, 'href="products/lash-and-eye-conditioner.html"')
    .replace(/href="\/products\/hydra-nutrition-essence"/g, 'href="products/hydra-nutrition-essence.html"')
    .replace(/href="\/pages\/faq"/g, 'href="#faq"')
    .replace(/href="\/pages\/return-policy"/g, 'href="#return-policy"')
    .replace(/href="\/pages\/terms-conditions"/g, 'href="#terms"')
    .replace(/href="\/pages\/privacy-policy"/g, 'href="#privacy"');

  // Replace base assets
  out = out
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/t\/5\/assets\/app\.css[^\"]*/g, 'assets/css/app.css')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/favicon[^\"]*/g, 'assets/images/favicon.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/logo\.png[^\"]*/g, 'assets/images/logo.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/t\/5\/assets\/login\.svg[^\"]*/g, 'assets/images/login.svg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/t\/5\/assets\/bag\.svg[^\"]*/g, 'assets/images/bag.svg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/t\/5\/assets\/singl-arow-3\.svg[^\"]*/g, 'assets/images/singl-arow-3.svg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/t\/5\/assets\/bg1\.png[^\"]*/g, 'assets/images/bg1.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/bg1\.png[^\"]*/g, 'assets/images/bg1.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/t\/5\/assets\/bg2\.png[^\"]*/g, 'assets/images/bg2.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/bg2\.png[^\"]*/g, 'assets/images/bg2.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/skin-bg\.jpg[^\"]*/g, 'assets/images/skin-bg.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/complete-img\.png[^\"]*/g, 'assets/images/complete-img.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/about-top\.jpg[^\"]*/g, 'assets/images/about-top.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/form-img\.jpg[^\"]*/g, 'assets/images/form-img.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/our-img\.jpg[^\"]*/g, 'assets/images/our-img.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/poster-img\.jpg[^\"]*/g, 'assets/images/poster-img.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/res-img-1\.png[^\"]*/g, 'assets/images/res-img-1.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/res-img-2\.png[^\"]*/g, 'assets/images/res-img-2.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/res-img-3\.png[^\"]*/g, 'assets/images/res-img-3.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/science-img\.jpg[^\"]*/g, 'assets/images/science-img.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/science-img\.png[^\"]*/g, 'assets/images/science-img.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/science-img-1\.jpg[^\"]*/g, 'assets/images/science-img-1.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/shop-img\.jpg[^\"]*/g, 'assets/images/shop-img.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/skin-foto\.png[^\"]*/g, 'assets/images/skin-foto.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/slide-shop-1_[^\"]*/g, 'assets/images/slide-shop-1_92e01278-b7bd-481a-86c9-ec55fdf5713d.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/slide-shop-2_[^\"]*/g, 'assets/images/slide-shop-2_50ef6f37-f90c-45c1-bee8-b7f2a2ec16bd.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/slide-shop-3_[^\"]*/g, 'assets/images/slide-shop-3_5c6e58a5-1cb8-4e70-824b-a4020d92c3d6.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/slide-shop-4_[^\"]*/g, 'assets/images/slide-shop-4_b82900a8-8a8b-47aa-b73f-e371b5795821.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/slide-shop-5_[^\"]*/g, 'assets/images/slide-shop-5_c81f1231-ca66-408c-896c-0adccb554f09.jpg')
    // Products
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_12_13\.jpg[^\"]*/g, 'assets/products/cleanser-1.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_1\.jpg[^\"]*/g, 'assets/products/cleanser-2.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_15_e045b2e0-991f-46c1-a1a9-910b44da7fe8\.jpg[^\"]*/g, 'assets/products/serum-1.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_4_651a2424-1199-425f-8ef3-b92f10f29c4d\.jpg[^\"]*/g, 'assets/products/serum-2.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_16\.jpg[^\"]*/g, 'assets/products/eye-1.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_2\.jpg[^\"]*/g, 'assets/products/eye-2.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_14\.jpg[^\"]*/g, 'assets/products/essence-1.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/803e3cd3c1410f61ee939257a7c88173\.jpg[^\"]*/g, 'assets/products/essence-2.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/BEAUTY_IN_STEM_IMAGES_BEAUTY_IN_STEM_14\.jpg[^\"]*/g, 'assets/products/collection-1.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_8\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_8.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_6\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_6.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_9\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_9.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_5_4b5ef057-1317-4733-bf1a-916a972bf193\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_5_4b5ef057-1317-4733-bf1a-916a972bf193.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_10_3\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_10_3.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_5_1\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_5_1.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_Model_Shoot__Recovery_Eye_Lash_Serum_087_1\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_Model_Shoot__Recovery_Eye_Lash_Serum_087_1.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_Model_Shoot8210\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_Model_Shoot8210.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_Model_Shoot8281_b6106a2c-d1be-4fdf-ad45-766607b55ebb\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_Model_Shoot8281_b6106a2c-d1be-4fdf-ad45-766607b55ebb.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/Beauty_In_Stem_Model_Shoot8334_a6878035-afd7-49ce-ab06-04bce5ea5af3\.jpg[^\"]*/g, 'assets/products/Beauty_In_Stem_Model_Shoot8334_a6878035-afd7-49ce-ab06-04bce5ea5af3.jpg')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/age-foto\.png[^\"]*/g, 'assets/products/age-foto.png')
    .replace(/\/\/stembeauty\.com\/cdn\/shop\/files\/hero-foto\.jpg[^\"]*/g, 'assets/products/hero-foto.jpg');

  // Scripts
  out = out
    .replace(/<script src="\/\/stembeauty\.com\/cdn\/shop\/t\/5\/assets\/vendors\.js[^"]*" defer><\/script>/g, '<script src="assets/js/vendors.js" defer></script>')
    .replace(/<script src="\/\/stembeauty\.com\/cdn\/shop\/t\/5\/assets\/app\.js[^"]*" defer><\/script>/g, '<script src="assets/js/mock-cart.js"></script>\n<script src="assets/js/app.js" defer></script>')
    .replace(/window\.shopifyAssetsUrl = "[^"]*";/g, 'window.shopifyAssetsUrl = "assets/images/";');

  // Hero video autoplay
  out = out.replace(/<video([^>]*)muted loop playsinline([^>]*)>/g, '<video$1muted loop playsinline autoplay$2>');

  return out;
}

function cleanProductHtml(html, slug) {
  let out = cleanHtml(html, slug);
  out = out
    .replace(/href="science\.html"/g, 'href="../science.html"')
    .replace(/href="us\.html"/g, 'href="../us.html"')
    .replace(/href="shop\.html"/g, 'href="../shop.html"')
    .replace(/href="index\.html"/g, 'href="../index.html"')
    .replace(/href="products\//g, 'href="')
    .replace(/src="assets\//g, 'src="../assets/')
    .replace(/href="assets\//g, 'href="../assets/')
    .replace(/"assets\/images\/"/g, '"../assets/images/"')
    .replace(/"assets\/products\//g, '"../assets/products/');

  out = out
    .replace(/<script src="assets\/js\/vendors\.js" defer><\/script>/g, '<script src="../assets/js/vendors.js" defer></script>')
    .replace(/<script src="assets\/js\/mock-cart\.js"><\/script>/g, '<script src="../assets/js/mock-cart.js"></script>')
    .replace(/<script src="assets\/js\/app\.js" defer><\/script>/g, '<script src="../assets/js/app.js" defer></script>');
  return out;
}

// 1. Index
fs.writeFileSync('index.html', cleanHtml(fs.readFileSync('stem_raw.html', 'utf8'), 'index'));
// 2. Science
fs.writeFileSync('science.html', cleanHtml(fs.readFileSync('page_science.html', 'utf8'), 'science'));
// 3. Us
fs.writeFileSync('us.html', cleanHtml(fs.readFileSync('page_us.html', 'utf8'), 'us'));
// 4. Shop
fs.writeFileSync('shop.html', cleanHtml(fs.readFileSync('page_shop.html', 'utf8'), 'shop'));

// 5. Products
if (!fs.existsSync('products')) fs.mkdirSync('products');
fs.writeFileSync('products/hydra-foam-cleanser.html', cleanProductHtml(fs.readFileSync('page_product_cleanser.html', 'utf8'), 'cleanser'));
fs.writeFileSync('products/reset-serum.html', cleanProductHtml(fs.readFileSync('page_product_serum.html', 'utf8'), 'serum'));
fs.writeFileSync('products/lash-and-eye-conditioner.html', cleanProductHtml(fs.readFileSync('page_product_eye.html', 'utf8'), 'eye'));
fs.writeFileSync('products/hydra-nutrition-essence.html', cleanProductHtml(fs.readFileSync('page_product_essence.html', 'utf8'), 'essence'));

console.log('Build completed successfully.');
