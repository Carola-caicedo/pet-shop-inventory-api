'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">taller-4 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ebbbbaa620b8f473bc001fe7f11a81b4372233ce3c59afc44d9433f0a95fe39a3a14ec74886ae64a2ebf2ff82f20f98df46317bb6ff55da48c5dc86799ebe144"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ebbbbaa620b8f473bc001fe7f11a81b4372233ce3c59afc44d9433f0a95fe39a3a14ec74886ae64a2ebf2ff82f20f98df46317bb6ff55da48c5dc86799ebe144"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ebbbbaa620b8f473bc001fe7f11a81b4372233ce3c59afc44d9433f0a95fe39a3a14ec74886ae64a2ebf2ff82f20f98df46317bb6ff55da48c5dc86799ebe144"' :
                                            'id="xs-controllers-links-module-AppModule-ebbbbaa620b8f473bc001fe7f11a81b4372233ce3c59afc44d9433f0a95fe39a3a14ec74886ae64a2ebf2ff82f20f98df46317bb6ff55da48c5dc86799ebe144"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ebbbbaa620b8f473bc001fe7f11a81b4372233ce3c59afc44d9433f0a95fe39a3a14ec74886ae64a2ebf2ff82f20f98df46317bb6ff55da48c5dc86799ebe144"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ebbbbaa620b8f473bc001fe7f11a81b4372233ce3c59afc44d9433f0a95fe39a3a14ec74886ae64a2ebf2ff82f20f98df46317bb6ff55da48c5dc86799ebe144"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ebbbbaa620b8f473bc001fe7f11a81b4372233ce3c59afc44d9433f0a95fe39a3a14ec74886ae64a2ebf2ff82f20f98df46317bb6ff55da48c5dc86799ebe144"' :
                                        'id="xs-injectables-links-module-AppModule-ebbbbaa620b8f473bc001fe7f11a81b4372233ce3c59afc44d9433f0a95fe39a3a14ec74886ae64a2ebf2ff82f20f98df46317bb6ff55da48c5dc86799ebe144"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-d4f46f5a933caedabba5b8db53c5127b0c75824d65648fe16d1d74f2bc2463b2198fbbda02a3f840a1715ca63c0d7a5c30b28e4774e35c097b405ca0a99c41c8"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-d4f46f5a933caedabba5b8db53c5127b0c75824d65648fe16d1d74f2bc2463b2198fbbda02a3f840a1715ca63c0d7a5c30b28e4774e35c097b405ca0a99c41c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d4f46f5a933caedabba5b8db53c5127b0c75824d65648fe16d1d74f2bc2463b2198fbbda02a3f840a1715ca63c0d7a5c30b28e4774e35c097b405ca0a99c41c8"' :
                                            'id="xs-controllers-links-module-AuthModule-d4f46f5a933caedabba5b8db53c5127b0c75824d65648fe16d1d74f2bc2463b2198fbbda02a3f840a1715ca63c0d7a5c30b28e4774e35c097b405ca0a99c41c8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-d4f46f5a933caedabba5b8db53c5127b0c75824d65648fe16d1d74f2bc2463b2198fbbda02a3f840a1715ca63c0d7a5c30b28e4774e35c097b405ca0a99c41c8"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-d4f46f5a933caedabba5b8db53c5127b0c75824d65648fe16d1d74f2bc2463b2198fbbda02a3f840a1715ca63c0d7a5c30b28e4774e35c097b405ca0a99c41c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d4f46f5a933caedabba5b8db53c5127b0c75824d65648fe16d1d74f2bc2463b2198fbbda02a3f840a1715ca63c0d7a5c30b28e4774e35c097b405ca0a99c41c8"' :
                                        'id="xs-injectables-links-module-AuthModule-d4f46f5a933caedabba5b8db53c5127b0c75824d65648fe16d1d74f2bc2463b2198fbbda02a3f840a1715ca63c0d7a5c30b28e4774e35c097b405ca0a99c41c8"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesModule-4b3284166a784d08c248ee9e83916d755d878203e9e112f1f1948e12312114f0384fe0c8fb8e4bf611848b0f62a770931af2cac52267e53637e2a2b21274faf8"' : 'data-bs-target="#xs-controllers-links-module-CategoriesModule-4b3284166a784d08c248ee9e83916d755d878203e9e112f1f1948e12312114f0384fe0c8fb8e4bf611848b0f62a770931af2cac52267e53637e2a2b21274faf8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-4b3284166a784d08c248ee9e83916d755d878203e9e112f1f1948e12312114f0384fe0c8fb8e4bf611848b0f62a770931af2cac52267e53637e2a2b21274faf8"' :
                                            'id="xs-controllers-links-module-CategoriesModule-4b3284166a784d08c248ee9e83916d755d878203e9e112f1f1948e12312114f0384fe0c8fb8e4bf611848b0f62a770931af2cac52267e53637e2a2b21274faf8"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-4b3284166a784d08c248ee9e83916d755d878203e9e112f1f1948e12312114f0384fe0c8fb8e4bf611848b0f62a770931af2cac52267e53637e2a2b21274faf8"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-4b3284166a784d08c248ee9e83916d755d878203e9e112f1f1948e12312114f0384fe0c8fb8e4bf611848b0f62a770931af2cac52267e53637e2a2b21274faf8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-4b3284166a784d08c248ee9e83916d755d878203e9e112f1f1948e12312114f0384fe0c8fb8e4bf611848b0f62a770931af2cac52267e53637e2a2b21274faf8"' :
                                        'id="xs-injectables-links-module-CategoriesModule-4b3284166a784d08c248ee9e83916d755d878203e9e112f1f1948e12312114f0384fe0c8fb8e4bf611848b0f62a770931af2cac52267e53637e2a2b21274faf8"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryMovementsModule.html" data-type="entity-link" >InventoryMovementsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InventoryMovementsModule-470eeca0e7f15c82e9e93207655c56544ead614a64ce3a2e9ae3f11d2e40b355b331fc9238edf967206ff96e411d27f7119b0f12a71a9184c08cf589d6a84106"' : 'data-bs-target="#xs-controllers-links-module-InventoryMovementsModule-470eeca0e7f15c82e9e93207655c56544ead614a64ce3a2e9ae3f11d2e40b355b331fc9238edf967206ff96e411d27f7119b0f12a71a9184c08cf589d6a84106"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InventoryMovementsModule-470eeca0e7f15c82e9e93207655c56544ead614a64ce3a2e9ae3f11d2e40b355b331fc9238edf967206ff96e411d27f7119b0f12a71a9184c08cf589d6a84106"' :
                                            'id="xs-controllers-links-module-InventoryMovementsModule-470eeca0e7f15c82e9e93207655c56544ead614a64ce3a2e9ae3f11d2e40b355b331fc9238edf967206ff96e411d27f7119b0f12a71a9184c08cf589d6a84106"' }>
                                            <li class="link">
                                                <a href="controllers/InventoryMovementsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryMovementsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InventoryMovementsModule-470eeca0e7f15c82e9e93207655c56544ead614a64ce3a2e9ae3f11d2e40b355b331fc9238edf967206ff96e411d27f7119b0f12a71a9184c08cf589d6a84106"' : 'data-bs-target="#xs-injectables-links-module-InventoryMovementsModule-470eeca0e7f15c82e9e93207655c56544ead614a64ce3a2e9ae3f11d2e40b355b331fc9238edf967206ff96e411d27f7119b0f12a71a9184c08cf589d6a84106"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InventoryMovementsModule-470eeca0e7f15c82e9e93207655c56544ead614a64ce3a2e9ae3f11d2e40b355b331fc9238edf967206ff96e411d27f7119b0f12a71a9184c08cf589d6a84106"' :
                                        'id="xs-injectables-links-module-InventoryMovementsModule-470eeca0e7f15c82e9e93207655c56544ead614a64ce3a2e9ae3f11d2e40b355b331fc9238edf967206ff96e411d27f7119b0f12a71a9184c08cf589d6a84106"' }>
                                        <li class="link">
                                            <a href="injectables/InventoryMovementsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryMovementsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PetsModule.html" data-type="entity-link" >PetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PetsModule-4e0528fec55570b7ed39ee42fb653bc767e839b68baf79088d07327641e618e5e075b182d15f2d061ce91452e419f224f065cf43ec6e1b42e1bd6bac51834ca8"' : 'data-bs-target="#xs-controllers-links-module-PetsModule-4e0528fec55570b7ed39ee42fb653bc767e839b68baf79088d07327641e618e5e075b182d15f2d061ce91452e419f224f065cf43ec6e1b42e1bd6bac51834ca8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PetsModule-4e0528fec55570b7ed39ee42fb653bc767e839b68baf79088d07327641e618e5e075b182d15f2d061ce91452e419f224f065cf43ec6e1b42e1bd6bac51834ca8"' :
                                            'id="xs-controllers-links-module-PetsModule-4e0528fec55570b7ed39ee42fb653bc767e839b68baf79088d07327641e618e5e075b182d15f2d061ce91452e419f224f065cf43ec6e1b42e1bd6bac51834ca8"' }>
                                            <li class="link">
                                                <a href="controllers/PetsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PetsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PetsModule-4e0528fec55570b7ed39ee42fb653bc767e839b68baf79088d07327641e618e5e075b182d15f2d061ce91452e419f224f065cf43ec6e1b42e1bd6bac51834ca8"' : 'data-bs-target="#xs-injectables-links-module-PetsModule-4e0528fec55570b7ed39ee42fb653bc767e839b68baf79088d07327641e618e5e075b182d15f2d061ce91452e419f224f065cf43ec6e1b42e1bd6bac51834ca8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PetsModule-4e0528fec55570b7ed39ee42fb653bc767e839b68baf79088d07327641e618e5e075b182d15f2d061ce91452e419f224f065cf43ec6e1b42e1bd6bac51834ca8"' :
                                        'id="xs-injectables-links-module-PetsModule-4e0528fec55570b7ed39ee42fb653bc767e839b68baf79088d07327641e618e5e075b182d15f2d061ce91452e419f224f065cf43ec6e1b42e1bd6bac51834ca8"' }>
                                        <li class="link">
                                            <a href="injectables/PetsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PetsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-f3aaa81f123166b3b8e5fff90dcfbc88ff553eaa8a95b9e296a2a052b2f628a8e74b9d0f7da8a4c9c729d50b076935346c36d70a0264d89f3c7fa816a775ba8f"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-f3aaa81f123166b3b8e5fff90dcfbc88ff553eaa8a95b9e296a2a052b2f628a8e74b9d0f7da8a4c9c729d50b076935346c36d70a0264d89f3c7fa816a775ba8f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-f3aaa81f123166b3b8e5fff90dcfbc88ff553eaa8a95b9e296a2a052b2f628a8e74b9d0f7da8a4c9c729d50b076935346c36d70a0264d89f3c7fa816a775ba8f"' :
                                            'id="xs-controllers-links-module-ProductsModule-f3aaa81f123166b3b8e5fff90dcfbc88ff553eaa8a95b9e296a2a052b2f628a8e74b9d0f7da8a4c9c729d50b076935346c36d70a0264d89f3c7fa816a775ba8f"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-f3aaa81f123166b3b8e5fff90dcfbc88ff553eaa8a95b9e296a2a052b2f628a8e74b9d0f7da8a4c9c729d50b076935346c36d70a0264d89f3c7fa816a775ba8f"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-f3aaa81f123166b3b8e5fff90dcfbc88ff553eaa8a95b9e296a2a052b2f628a8e74b9d0f7da8a4c9c729d50b076935346c36d70a0264d89f3c7fa816a775ba8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-f3aaa81f123166b3b8e5fff90dcfbc88ff553eaa8a95b9e296a2a052b2f628a8e74b9d0f7da8a4c9c729d50b076935346c36d70a0264d89f3c7fa816a775ba8f"' :
                                        'id="xs-injectables-links-module-ProductsModule-f3aaa81f123166b3b8e5fff90dcfbc88ff553eaa8a95b9e296a2a052b2f628a8e74b9d0f7da8a4c9c729d50b076935346c36d70a0264d89f3c7fa816a775ba8f"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SuppliersModule.html" data-type="entity-link" >SuppliersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SuppliersModule-62dd211392e71bd8635e7427a8cc447f66d3bd598335f444a8f264fb5f7e7a46cd22ac2c78bcb5444bf8eb3408f3120b8565bee46084cc1eaf592a064636cdee"' : 'data-bs-target="#xs-controllers-links-module-SuppliersModule-62dd211392e71bd8635e7427a8cc447f66d3bd598335f444a8f264fb5f7e7a46cd22ac2c78bcb5444bf8eb3408f3120b8565bee46084cc1eaf592a064636cdee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SuppliersModule-62dd211392e71bd8635e7427a8cc447f66d3bd598335f444a8f264fb5f7e7a46cd22ac2c78bcb5444bf8eb3408f3120b8565bee46084cc1eaf592a064636cdee"' :
                                            'id="xs-controllers-links-module-SuppliersModule-62dd211392e71bd8635e7427a8cc447f66d3bd598335f444a8f264fb5f7e7a46cd22ac2c78bcb5444bf8eb3408f3120b8565bee46084cc1eaf592a064636cdee"' }>
                                            <li class="link">
                                                <a href="controllers/SuppliersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuppliersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SuppliersModule-62dd211392e71bd8635e7427a8cc447f66d3bd598335f444a8f264fb5f7e7a46cd22ac2c78bcb5444bf8eb3408f3120b8565bee46084cc1eaf592a064636cdee"' : 'data-bs-target="#xs-injectables-links-module-SuppliersModule-62dd211392e71bd8635e7427a8cc447f66d3bd598335f444a8f264fb5f7e7a46cd22ac2c78bcb5444bf8eb3408f3120b8565bee46084cc1eaf592a064636cdee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SuppliersModule-62dd211392e71bd8635e7427a8cc447f66d3bd598335f444a8f264fb5f7e7a46cd22ac2c78bcb5444bf8eb3408f3120b8565bee46084cc1eaf592a064636cdee"' :
                                        'id="xs-injectables-links-module-SuppliersModule-62dd211392e71bd8635e7427a8cc447f66d3bd598335f444a8f264fb5f7e7a46cd22ac2c78bcb5444bf8eb3408f3120b8565bee46084cc1eaf592a064636cdee"' }>
                                        <li class="link">
                                            <a href="injectables/SuppliersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuppliersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatePlaygroundModule.html" data-type="entity-link" >TemplatePlaygroundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' : 'data-bs-target="#xs-components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' :
                                            'id="xs-components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                            <li class="link">
                                                <a href="components/TemplatePlaygroundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplatePlaygroundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' : 'data-bs-target="#xs-injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' :
                                        'id="xs-injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                        <li class="link">
                                            <a href="injectables/HbsRenderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HbsRenderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TemplateEditorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateEditorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ZipExportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZipExportService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-1224fa2a5323106635dc6ed9f287861a5d0fdb702125a83a0edc1af78f2a1ec62063e39b04fc94f1b38f07315aead7f169eb68e1aad9a659a268db7625db6290"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-1224fa2a5323106635dc6ed9f287861a5d0fdb702125a83a0edc1af78f2a1ec62063e39b04fc94f1b38f07315aead7f169eb68e1aad9a659a268db7625db6290"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-1224fa2a5323106635dc6ed9f287861a5d0fdb702125a83a0edc1af78f2a1ec62063e39b04fc94f1b38f07315aead7f169eb68e1aad9a659a268db7625db6290"' :
                                            'id="xs-controllers-links-module-UsersModule-1224fa2a5323106635dc6ed9f287861a5d0fdb702125a83a0edc1af78f2a1ec62063e39b04fc94f1b38f07315aead7f169eb68e1aad9a659a268db7625db6290"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-1224fa2a5323106635dc6ed9f287861a5d0fdb702125a83a0edc1af78f2a1ec62063e39b04fc94f1b38f07315aead7f169eb68e1aad9a659a268db7625db6290"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-1224fa2a5323106635dc6ed9f287861a5d0fdb702125a83a0edc1af78f2a1ec62063e39b04fc94f1b38f07315aead7f169eb68e1aad9a659a268db7625db6290"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-1224fa2a5323106635dc6ed9f287861a5d0fdb702125a83a0edc1af78f2a1ec62063e39b04fc94f1b38f07315aead7f169eb68e1aad9a659a268db7625db6290"' :
                                        'id="xs-injectables-links-module-UsersModule-1224fa2a5323106635dc6ed9f287861a5d0fdb702125a83a0edc1af78f2a1ec62063e39b04fc94f1b38f07315aead7f169eb68e1aad9a659a268db7625db6290"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link" >CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InventoryMovementsController.html" data-type="entity-link" >InventoryMovementsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PetsController.html" data-type="entity-link" >PetsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SuppliersController.html" data-type="entity-link" >SuppliersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Category.html" data-type="entity-link" >Category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/InventoryMovement.html" data-type="entity-link" >InventoryMovement</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Pet.html" data-type="entity-link" >Pet</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Product.html" data-type="entity-link" >Product</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Supplier.html" data-type="entity-link" >Supplier</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMovementDto.html" data-type="entity-link" >CreateMovementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePetDto.html" data-type="entity-link" >CreatePetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSupplierDto.html" data-type="entity-link" >CreateSupplierDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePetDto.html" data-type="entity-link" >UpdatePetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStockDto.html" data-type="entity-link" >UpdateStockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSupplierDto.html" data-type="entity-link" >UpdateSupplierDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HbsRenderService.html" data-type="entity-link" >HbsRenderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InventoryMovementsService.html" data-type="entity-link" >InventoryMovementsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PetsService.html" data-type="entity-link" >PetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuppliersService.html" data-type="entity-link" >SuppliersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemplateEditorService.html" data-type="entity-link" >TemplateEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZipExportService.html" data-type="entity-link" >ZipExportService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CompoDocConfig.html" data-type="entity-link" >CompoDocConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Template.html" data-type="entity-link" >Template</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});