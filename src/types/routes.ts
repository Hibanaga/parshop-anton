enum Routes {
    Home = '/',
    Delivery = '/delivery',
    Refund = '/refund',
    Reviews = '/reviews',
    Contact = '/contact',
    Catalog = '/catalog',
    CatalogCategory = '/catalog/[slug]',
    CatalogSubCategories = '/catalog/[globalSlug]/[slug]',
}

export default Routes;
