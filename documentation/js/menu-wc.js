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
                    <a href="index.html" data-type="index-link">fs-nest-js documentation</a>
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
                                <span class="icon ion-ios-paper"></span>README
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-c2dce3dae31b30dfbf5d17ef7a3a67033ef27e3b3c1b8e755ce1a415a94f528d1995cbebc269ba00031316a1210b96fd55294ccd32d7cbc600d6ce2ccbd2bc76"' : 'data-target="#xs-controllers-links-module-AuthModule-c2dce3dae31b30dfbf5d17ef7a3a67033ef27e3b3c1b8e755ce1a415a94f528d1995cbebc269ba00031316a1210b96fd55294ccd32d7cbc600d6ce2ccbd2bc76"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c2dce3dae31b30dfbf5d17ef7a3a67033ef27e3b3c1b8e755ce1a415a94f528d1995cbebc269ba00031316a1210b96fd55294ccd32d7cbc600d6ce2ccbd2bc76"' :
                                            'id="xs-controllers-links-module-AuthModule-c2dce3dae31b30dfbf5d17ef7a3a67033ef27e3b3c1b8e755ce1a415a94f528d1995cbebc269ba00031316a1210b96fd55294ccd32d7cbc600d6ce2ccbd2bc76"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-c2dce3dae31b30dfbf5d17ef7a3a67033ef27e3b3c1b8e755ce1a415a94f528d1995cbebc269ba00031316a1210b96fd55294ccd32d7cbc600d6ce2ccbd2bc76"' : 'data-target="#xs-injectables-links-module-AuthModule-c2dce3dae31b30dfbf5d17ef7a3a67033ef27e3b3c1b8e755ce1a415a94f528d1995cbebc269ba00031316a1210b96fd55294ccd32d7cbc600d6ce2ccbd2bc76"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c2dce3dae31b30dfbf5d17ef7a3a67033ef27e3b3c1b8e755ce1a415a94f528d1995cbebc269ba00031316a1210b96fd55294ccd32d7cbc600d6ce2ccbd2bc76"' :
                                        'id="xs-injectables-links-module-AuthModule-c2dce3dae31b30dfbf5d17ef7a3a67033ef27e3b3c1b8e755ce1a415a94f528d1995cbebc269ba00031316a1210b96fd55294ccd32d7cbc600d6ce2ccbd2bc76"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GlobalModule.html" data-type="entity-link" >GlobalModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OwnerModule.html" data-type="entity-link" >OwnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OwnerModule-1ed7158ff40f221f90513afed5decf0226632a78f31dcdee8cf8d858ed2c0b22e17bd6641d2f98baa50dedb95de2468f5661e1646b2431ae2c61d9eec0caaff4"' : 'data-target="#xs-controllers-links-module-OwnerModule-1ed7158ff40f221f90513afed5decf0226632a78f31dcdee8cf8d858ed2c0b22e17bd6641d2f98baa50dedb95de2468f5661e1646b2431ae2c61d9eec0caaff4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OwnerModule-1ed7158ff40f221f90513afed5decf0226632a78f31dcdee8cf8d858ed2c0b22e17bd6641d2f98baa50dedb95de2468f5661e1646b2431ae2c61d9eec0caaff4"' :
                                            'id="xs-controllers-links-module-OwnerModule-1ed7158ff40f221f90513afed5decf0226632a78f31dcdee8cf8d858ed2c0b22e17bd6641d2f98baa50dedb95de2468f5661e1646b2431ae2c61d9eec0caaff4"' }>
                                            <li class="link">
                                                <a href="controllers/OwnerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OwnerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OwnerModule-1ed7158ff40f221f90513afed5decf0226632a78f31dcdee8cf8d858ed2c0b22e17bd6641d2f98baa50dedb95de2468f5661e1646b2431ae2c61d9eec0caaff4"' : 'data-target="#xs-injectables-links-module-OwnerModule-1ed7158ff40f221f90513afed5decf0226632a78f31dcdee8cf8d858ed2c0b22e17bd6641d2f98baa50dedb95de2468f5661e1646b2431ae2c61d9eec0caaff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OwnerModule-1ed7158ff40f221f90513afed5decf0226632a78f31dcdee8cf8d858ed2c0b22e17bd6641d2f98baa50dedb95de2468f5661e1646b2431ae2c61d9eec0caaff4"' :
                                        'id="xs-injectables-links-module-OwnerModule-1ed7158ff40f221f90513afed5decf0226632a78f31dcdee8cf8d858ed2c0b22e17bd6641d2f98baa50dedb95de2468f5661e1646b2431ae2c61d9eec0caaff4"' }>
                                        <li class="link">
                                            <a href="injectables/JwtAuthGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAuthGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PermissionsModule-00a6a5adbe9524768bf16c74ff843d258fb6c372b1ef072d651f26feac03c3db3f0107eaea5db179113990c43512992d229cca2d3cf40a21f6785bc3bc6fecb3"' : 'data-target="#xs-controllers-links-module-PermissionsModule-00a6a5adbe9524768bf16c74ff843d258fb6c372b1ef072d651f26feac03c3db3f0107eaea5db179113990c43512992d229cca2d3cf40a21f6785bc3bc6fecb3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-00a6a5adbe9524768bf16c74ff843d258fb6c372b1ef072d651f26feac03c3db3f0107eaea5db179113990c43512992d229cca2d3cf40a21f6785bc3bc6fecb3"' :
                                            'id="xs-controllers-links-module-PermissionsModule-00a6a5adbe9524768bf16c74ff843d258fb6c372b1ef072d651f26feac03c3db3f0107eaea5db179113990c43512992d229cca2d3cf40a21f6785bc3bc6fecb3"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PermissionsModule-00a6a5adbe9524768bf16c74ff843d258fb6c372b1ef072d651f26feac03c3db3f0107eaea5db179113990c43512992d229cca2d3cf40a21f6785bc3bc6fecb3"' : 'data-target="#xs-injectables-links-module-PermissionsModule-00a6a5adbe9524768bf16c74ff843d258fb6c372b1ef072d651f26feac03c3db3f0107eaea5db179113990c43512992d229cca2d3cf40a21f6785bc3bc6fecb3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-00a6a5adbe9524768bf16c74ff843d258fb6c372b1ef072d651f26feac03c3db3f0107eaea5db179113990c43512992d229cca2d3cf40a21f6785bc3bc6fecb3"' :
                                        'id="xs-injectables-links-module-PermissionsModule-00a6a5adbe9524768bf16c74ff843d258fb6c372b1ef072d651f26feac03c3db3f0107eaea5db179113990c43512992d229cca2d3cf40a21f6785bc3bc6fecb3"' }>
                                        <li class="link">
                                            <a href="injectables/JwtAuthGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAuthGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RolesModule-a7a12c6fb2e781d343d84e595f78c79d23a78a6ca5d511a89a2f69f017cb37d59fc49dd14ab2245c5add7c0f7166a60ab9d7b0fd59b62a9699509303474ae27c"' : 'data-target="#xs-controllers-links-module-RolesModule-a7a12c6fb2e781d343d84e595f78c79d23a78a6ca5d511a89a2f69f017cb37d59fc49dd14ab2245c5add7c0f7166a60ab9d7b0fd59b62a9699509303474ae27c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-a7a12c6fb2e781d343d84e595f78c79d23a78a6ca5d511a89a2f69f017cb37d59fc49dd14ab2245c5add7c0f7166a60ab9d7b0fd59b62a9699509303474ae27c"' :
                                            'id="xs-controllers-links-module-RolesModule-a7a12c6fb2e781d343d84e595f78c79d23a78a6ca5d511a89a2f69f017cb37d59fc49dd14ab2245c5add7c0f7166a60ab9d7b0fd59b62a9699509303474ae27c"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-fc79c54ed5107e57de7ea4853d8afdad8d757e639628c8145aa1d6c853c733f71359cba8dbb592aa9b9202fcc97e3d12f7696bda0b9fc9eef18615edc821160e"' : 'data-target="#xs-controllers-links-module-UsersModule-fc79c54ed5107e57de7ea4853d8afdad8d757e639628c8145aa1d6c853c733f71359cba8dbb592aa9b9202fcc97e3d12f7696bda0b9fc9eef18615edc821160e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-fc79c54ed5107e57de7ea4853d8afdad8d757e639628c8145aa1d6c853c733f71359cba8dbb592aa9b9202fcc97e3d12f7696bda0b9fc9eef18615edc821160e"' :
                                            'id="xs-controllers-links-module-UsersModule-fc79c54ed5107e57de7ea4853d8afdad8d757e639628c8145aa1d6c853c733f71359cba8dbb592aa9b9202fcc97e3d12f7696bda0b9fc9eef18615edc821160e"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/GlobalController.html" data-type="entity-link" >GlobalController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/OwnerEntity.html" data-type="entity-link" >OwnerEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PermissionEntity.html" data-type="entity-link" >PermissionEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RoleEntity.html" data-type="entity-link" >RoleEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateMainUserDto.html" data-type="entity-link" >CreateMainUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOwnerDto.html" data-type="entity-link" >CreateOwnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permissions.html" data-type="entity-link" >Permissions</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permissions-1.html" data-type="entity-link" >Permissions</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterPermissionDto.html" data-type="entity-link" >RegisterPermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role-1.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role-2.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role-3.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/SerializedUser.html" data-type="entity-link" >SerializedUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/SingleOwnerDto.html" data-type="entity-link" >SingleOwnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorsInterceptor.html" data-type="entity-link" >ErrorsInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalService.html" data-type="entity-link" >GlobalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OwnerService.html" data-type="entity-link" >OwnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/PermissionsGaurd.html" data-type="entity-link" >PermissionsGaurd</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInfoType.html" data-type="entity-link" >UserInfoType</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
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
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});