enum Routes {
    Home = '/',
    Delivery = '/delivery',
    Catalog = '/catalog',
    CatalogCategory = '/catalog/[slug]',
    CatalogSubCategories = '/catalog/[globalSlug]/[slug]',
}

export default Routes;
