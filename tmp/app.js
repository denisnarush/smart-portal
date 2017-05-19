var app = angular.module('app', [
  'ngDialog',
  'ngTagsInput'
]);

app.controller('TestController', ['$scope', 'ngDialog', '$q', function ($scope, ngDialog, $q) {

  $scope.loadTags = function (query) {
    console.log('test');
    return [{id: 1, name: 'test'}, {id: 2, name: 'test 2'}];

    // return {data: [{id: 1, name: 'test'}, {id: 1, name: 'test'}]};
  };

  $scope.openLink = function () {
    ngDialog.open({
      className: 'ngdialog_full-width',
      template: '<div class="ng-dialog__full-width ng-dialog__wrapper">\n     <div class="ng-dialog__header header">\n         <h1 class="header__description">Добавить ссылку в раздел</h1>\n         <div class="nav">\n             <div class="nav__link nav__link_dropdown">\n                <span class="text">Распространители</span>\n                <div class="i-arrow i-arrow_to_down"></div>\n                 <div class="tooltip  tooltip_edit">\n                     <i class="tooltip__arrow tooltip__arrow_white"></i>\n                     <div class="content tooltip__content tooltip__content_default">\n                         <div class="search  search_icon">\n                             <input type="search" placeholder="Найти участника">\n                             <span class="icon-search icon_gray i-icon"></span>\n                         </div>\n                         <ul class="list">\n                             <li class="list__item list__item_hovered">\n                                 <div class="text">Интиресное</div>\n                             </li>\n                             <li class="list__item list__item_hovered">\n                                 <div class="text">Интернет</div>\n                             </li>\n                             <li class=" list__item list__item_action_add list__item_hovered list__item_dividered_top text_uppercase btn-">\n                                 <div class="text">Создать раздел</div>\n                             </li>\n                             <li class="list__item list__item_hovered ">\n                                 <div class="text">Интер</div>\n                             </li>\n                         </ul>\n                     </div>\n                 </div>\n                 <div  class="category-form category-form_right">\n                     <i class="category-form__arrow" style="top: 152px;"></i>\n                     <div class="category-form__item category__item_title category-form__item_icon">\n                         <span class="text">Добавить раздел</span>\n                         <span class="i-icon icon_category-form icon-cancel icon_green"></span>\n                     </div>\n                     <div class="category-form__item category-form__item_input  category-form__item_with-error">\n                         <div class="tooltip tooltip_error tooltip_top">\n                             <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>\n                             Недопустимые символы\n                             <i class="tooltip__arrow tooltip__arrow_red tooltip__arrow_bottom" style="left: 5px"></i>\n                         </div>\n                         <input type="text" placeholder="Распространители">\n                     </div>\n                     <div class="category-form__item category-form__item_input category-form__item_icon">\n                         <span class="icon-group icon_blue"></span>\n                         <input type="text" placeholder="Настройка доступа">\n                     </div>\n                     <div class="category-form__footer category-form__footer_justify-center">\n                         <button class="button" type="button">Сохранить</button>\n                     </div>\n                 </div>\n                 <div class="tooltip tooltip_active tooltip_search">\n                     <i class="tooltip__arrow tooltip__arrow_white"></i>\n                     <div class="content tooltip__content tooltip__content_default">\n                         <div class="search  search_icon ">\n                             <input type="search" placeholder="Найти участника">\n                             <span class="icon-search icon_gray i-icon"></span>\n                         </div>\n                         <div class="scroll scroll_green" style="height: 240px">\n                             <ul class="list">\n                                 <li class="list__item list__item_iconed list__item_active list__item_hovered">\n                                     <div class="text">Распростронители</div>\n                                     <span class="i-icon icon-pencil icon_gray"></span>\n                                 </li>\n                                 <li class="list__item list__item_iconed list__item_hovered">\n                                     <div class="text">Менеджеры</div>\n                                     <span class="i-icon icon-pencil icon_gray"></span>\n                                 </li>\n                                 <li class="list__item list__item_iconed list__item_hovered">\n                                     <div class="text">Дизайнеры</div>\n                                     <span class="i-icon icon-pencil icon_gray"></span>\n                                 </li>\n                                 <li class="list__item list__item_iconed list__item_hovered">\n                                     <div class="text">Техническая поддержка</div>\n                                     <span class="i-icon icon-pencil icon_gray"></span>\n                                 </li>\n                                 <li class="list__item list__item_iconed list__item_hovered">\n                                     <div class="text">Распростронители</div>\n                                     <span class="i-icon icon-pencil icon_gray"></span>\n                                 </li>\n                                 <li class="list__item list__item_iconed list__item_hovered">\n                                     <div class="text">Менеджеры</div>\n                                     <span class="i-icon icon-pencil icon_gray"></span>\n                                 </li>\n                                 <li class="list__item list__item_iconed list__item_hovered">\n                                     <div class="text">Дизайнеры</div>\n                                     <span class="i-icon icon-pencil icon_gray"></span>\n                                 </li>\n                                 <li class="list__item list__item_iconed list__item_hovered">\n                                     <div class="text">Техническая поддержка</div>\n                                     <span class="i-icon icon-pencil icon_gray"></span>\n                                 </li>\n                             </ul>\n                         </div>\n                     </div>\n                 </div>\n                 <div  class="category-form category-form_right">\n                     <i class="category-form__arrow" style="top: 152px;"></i>\n                     <div class="category-form__item category__item_title category-form__item_icon">\n                         <span class="text">Добавить раздел11</span>\n                         <span class="i-icon icon_category-form icon-cancel icon_green"></span>\n                     </div>\n                     <div class="category-form__item category-form__item_input  category-form__item_with-error">\n                         <div class="tooltip tooltip_error tooltip_top">\n                             <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>\n                             Недопустимые символы\n                             <i class="tooltip__arrow tooltip__arrow_red tooltip__arrow_bottom" style="left: 5px"></i>\n                         </div>\n                         <input type="text" placeholder="Распространители">\n                     </div>\n                     <div class="category-form__item category-form__item_tag category-form__item_input  category-form__item_icon">\n                         <span class="icon-group icon_blue"></span>\n                         <div class="tag">\n                            <span class="tag__item tag__item_closer">\n                              <span class="tag__text">Менеджеры</span>\n                              <i class="i-closer"></i>\n                            </span>\n                             <span class="tag__item_closer">\n                                  <span class="tag__text">Игорь Павлов</span>\n                                <i class="i-closer"></i>\n                             </span>\n                             <span class="tag__item tag__item_closer">\n                                  <span class="tag__text">Стажеры</span>\n                                <i class="i-closer"></i>\n                             </span>\n                         </div>\n                     </div>\n                     <div class="category-form__footer">\n                         <button class="button button_success" type="button">Сохранить</button>\n                         <button class="button" type="button">Удалить</button>\n                     </div>\n                 </div>\n             </div>\n         </div>\n         <div class="header-side">\n             <button class="button button_success button_success-full" type="button">Сохранить</button>\n             <button class="button" type="button">Отменить</button>\n         </div>\n     </div>\n    <div class="ng-dialog__content">\n        <div class="scroll-content">\n            <div class="article article_modal">\n                <div class="article__header">\n                    <div class="category__item category__item_full-width category__item_input category__item_icon">\n                        <i class="fa fa-link icon_blue" aria-hidden="true"></i>\n                        <input class="input" type="text" placeholder="http://www.annexus.su/">\n                    </div>\n                </div>\n                <div class="sidebar">\n                    <div class="avatar">\n                        <div class="avatar__cover avatar__cover_square avatar__cover_small">\n                            <div class="link__slide">\n                                <img class="pic" src="interface/ava.jpg" alt="" height="65" width="65">\n                                <div class="link__shadow">\n                                    <span class="link__opacity"></span>\n                                    <a href="#" class="link__edit_small circle circle_xs circle_green">\n                                       <span class="icon icon-up-arrow"></span>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="content article__content">\n                    <div class="content__caption">\n                        <textarea class="input textarea">За 25 тысяч километров я не потратил заправку признаков хорошего интерфейса</textarea>\n                    </div>\n                </div>\n                <div class="article__content">\n                    <div class="article__editor"\n                         ng-model="$ctrl.model.content"\n                         redactor="$ctrl.redactorConfig">\n                    </div>\n                   \n                    <tags-input ng-model="tags"  display-property="name" placeholder="Добавить тег...">\n                        <span class=" icon-tag icon icon_blue"></span>\n                        <auto-complete source="loadTags($query)" display-property="name"></auto-complete>\n                    </tags-input>\n                    <div class="category__item category__item_tag category__item_input  category__item_icon">\n                        <span class="icon-group icon_blue"></span>\n                        <div class="tag">\n              <span class="tag__item tag__item_closer">\n                <span class="tag__text">Менеджеры</span>\n                <i class="i-closer"></i>\n              </span>\n                            <span class="tag__item tag__item_closer">\n                <span class="tag__text">Игорь Павлов</span>\n              <i class="i-closer"></i>\n              </span>\n                            <span class="tag__item tag__item_closer">\n                <span class="tag__text">Стажеры</span>\n              <i class="i-closer"></i>\n              </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
      plain: true,
      scope: $scope
    });
  };

  $scope.openArticle = function () {
    ngDialog.open({
      className: 'ngdialog_full-width',
      template: '<div class="ng-dialog__full-width ng-dialog__wrapper">\n     <div class="ng-dialog__header header">\n         <h1 class="header__description">Добавить ссылку в раздел</h1>\n         <div class="nav">\n             <div class="nav__link nav__link_dropdown">\n                <span class="text">Распространители</span>\n                <div class="i-arrow i-arrow_to_down"></div>\n                 <div class="category-form category-form_not-padding  category-form_bottom" style="display: none;top:100%;left:95px;">\n                     <i class="category-form__arrow category-form__arrow_top" style="left: 75px;top: 0;margin-top: -6px;"></i>\n                        <div class="category-form__item category-form__item_icon">\n                            <div class="search">\n                                <input type="search" placeholder="Поиск по тегам"> \n                                <span class="icon-search icon_sidebar i-icon"></span> \n                            </div>\n                        </div> \n                        <ul class="list list_bordered">\n                             <li class="list__item list__item_hovered">\n                                 <div class="text">Интиресное</div>\n                             </li>\n                             <li class="list__item list__item_hovered">\n                                 <div class="text">Интернет</div>\n                             </li>\n                        </ul>\n                        <ul class="list">\n                             <li class="list__item list__item_action_add list__item_hovered text_uppercase">\n                                 <div class="text">Добавить раздел</div>\n                             </li>\n                             <li class="list__item list__item_hovered ">\n                                 <div class="text">Интер</div>\n                             </li>\n                         </ul>\n                 </div>\n                 <div style="top: 36px;left: 394px; display:none" class="category-form category-form_right"> <i class="category-form__arrow" style="left: -6px; top: initial; bottom: 30px;"></i> <span class="i-icon icon_category-form icon-close"></span>\n                     <div class="category-form__item category-form__item_title category-form__item_icon"> <span class="text">Добавить раздел</span> </div>\n                     <div class="category-form__label">Название раздела</div>\n                     <div class="category-form__item category-form__item_input">\n                         <div class="tooltip tooltip_error tooltip_top"> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Недопустимые символы <i class="tooltip__arrow tooltip__arrow_red tooltip__arrow_bottom" style="left: 5px"></i> </div>\n                         <input type="text" placeholder="Название"> </div>\n                     <div class="category-form__label">Доступ к разделу</div>\n                     <div class="category-form__item">\n                         <div class="radio-button">\n                             <label class="radio-button-label">\n                                 <input class="radio-button" name="user" type="radio"> <i class="radio-button__indicator radio-button__indicator_blue"></i> <span class="text">Всем</span> </label>\n                             <label class="radio-button-label">\n                                 <input class="radio-button" name="user" type="radio"> <i class="radio-button__indicator radio-button__indicator_blue"></i> <span class="text">Мне</span> </label>\n                             <label class="radio-button-label">\n                                 <input class="radio-button" name="user" type="radio"> <i class="radio-button__indicator radio-button__indicator_blue"></i> <span class="text">Список</span> </label>\n                         </div>\n                     </div>\n                     <div class="category-form__footer category-form__footer_justify-center">\n                         <button class="button" type="button">Сохранить</button>\n                     </div>\n                 </div>\n                 <div class="category-form category-form_not-padding  category-form_bottom" style="display: ;top:100%;left:95px;">\n                     <i class="category-form__arrow category-form__arrow_top" style="left: 75px;top: 0;margin-top: -6px;"></i>\n                     <div class="category-form__item category-form__item_icon">\n                         <div class="search">\n                             <input type="search" placeholder="Поиск по тегам">\n                             <span class="icon-search icon_sidebar i-icon"></span>\n                         </div>\n                     </div>\n                     <ul class="list list_border-top scroll" style="max-height: 210px">\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Распространители\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li>\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Менеджеры\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li>\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Дизайнеры\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li>\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Отчеты бухгалтерии\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li>\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Прокачка\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li>\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Отчеты с мероприятий\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li>\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Прокачка\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li>\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Отчеты с мероприятий\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li> <li class="list__item list__item_hovered list__item_iconed-right">\n                         <div class="text">\n                             Прокачка\n                             <span class="fa i-icon icon-pencil"></span>\n                         </div>\n                     </li>\n                         <li class="list__item list__item_hovered list__item_iconed-right">\n                             <div class="text">\n                                 Отчеты с мероприятий\n                                 <span class="fa i-icon icon-pencil"></span>\n                             </div>\n                         </li>\n                     </ul>\n                 </div>\n                 <div style="top: 85px;left: 394px; display:" class="category-form category-form_right"> <i class="category-form__arrow" style="left: -6px; top: initial; bottom: 30px;"></i> <span class="i-icon icon_category-form icon-close"></span>\n                     <div class="category-form__item category-form__item_title category-form__item_icon"> <span class="text">Добавить раздел</span> </div>\n                     <div class="category-form__label">Название раздела</div>\n                     <div class="category-form__item category-form__item_input">\n                         <div class="tooltip tooltip_error tooltip_top"> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Недопустимые символы <i class="tooltip__arrow tooltip__arrow_red tooltip__arrow_bottom" style="left: 5px"></i> </div>\n                         <input type="text" placeholder="Название"> </div>\n                     <div class="category-form__label">Доступ к разделу</div>\n                     <div class="category-form__item">\n                         <div class="radio-button">\n                             <label class="radio-button-label">\n                                 <input class="radio-button" name="user" type="radio"> <i class="radio-button__indicator radio-button__indicator_blue"></i> <span class="text">Всем</span> </label>\n                             <label class="radio-button-label">\n                                 <input class="radio-button" name="user" type="radio"> <i class="radio-button__indicator radio-button__indicator_blue"></i> <span class="text">Мне</span> </label>\n                             <label class="radio-button-label">\n                                 <input class="radio-button" name="user" type="radio"> <i class="radio-button__indicator radio-button__indicator_blue"></i> <span class="text">Список</span> </label>\n                         </div>\n                     </div>\n                     <div class="category-form__footer">\n                         <button class="button button_dissolution" type="button">Удалить</button>\n                         <button class="button button_success" type="button">Сохранить</button>\n                     </div>\n                 </div>\n             </div>\n         </div>\n         <div class="header-side">\n             <button class="button" type="button">Отменить</button>\n             <button class="button button_success" type="button">Сохранить</button>\n         </div>\n     </div>\n    <div class="ng-dialog__content">\n        <div class="scroll-content">\n            <div class="article article_modal">\n                <div class="article-cover" style="background-image: url(\'interface/bg.jpg\')")">\n                    <img class="article-cover__img" src="interface/icons/icon-img.png" alt="">\n                    <button class="button button_white">Загрузить изображение</button>\n                </div>\n                <div class="article__header">\n                    <div class="category__item category__item_full-width category__item_input ">\n                        <input class="input" type="text" placeholder="Заголовок">\n                    </div>\n                </div>\n                <div class="article__content">\n                    <div class="article__editor"\n                         ng-model="$ctrl.model.content"\n                         redactor="$ctrl.redactorConfig">\n                    </div>\n                   \n                    <tags-input ng-model="tags"  display-property="name" placeholder="Добавить тег...">\n                        <span class=" icon-tag icon icon_blue"></span>\n                        <auto-complete source="loadTags($query)" display-property="name"></auto-complete>\n                    </tags-input>\n                    <div class="category__item category__item_tag category__item_input  category__item_icon">\n                        <span class="icon-group icon_blue"></span>\n                        <div class="tag">\n              <span class="tag__item tag__item_closer">\n                <span class="tag__text">Менеджеры</span>\n                <i class="i-closer"></i>\n              </span>\n                            <span class="tag__item tag__item_closer">\n                <span class="tag__text">Игорь Павлов</span>\n              <i class="i-closer"></i>\n              </span>\n                            <span class="tag__item tag__item_closer">\n                <span class="tag__text">Стажеры</span>\n              <i class="i-closer"></i>\n              </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="article article_modal">\n                <div class="article-cover" style="background-image: url(\'http://www.dolomitisuperski.com/website/var/tmp/image-thumbnails/660000/667626/thumb__demi_gallery_detail_landscape/mountains_7824779.jpeg\')">\n                    <div class="link__slide">\n                        <div class="link__shadow">\n                            <span class="link__opacity"></span>\n                            <a href="#" class="link__edit link__edit_big  circle  circle_green ">\n                                <span class="icon icon-up-arrow icon_white"></span>\n                            </a>\n                            <div class="link__delete link__delete_big">\n                                <span class="icon icon-trashcan"></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="article__header">\n                    <div class="category__item category__item_full-width category__item_input ">\n                        <input class="input" type="text" placeholder="Заголовок">\n                    </div>\n                </div>\n                <div class="article__content">\n                    <div class="article__editor"\n                         ng-model="$ctrl.model.content"\n                         redactor="$ctrl.redactorConfig">\n                    </div>\n        \n                    <tags-input ng-model="tags"  display-property="name" placeholder="Добавить тег...">\n                        <span class=" icon-tag icon icon_blue"></span>\n                        <auto-complete source="loadTags($query)" display-property="name"></auto-complete>\n                    </tags-input>\n                    <div class="category__item category__item_tag category__item_input  category__item_icon">\n                        <span class="icon-group icon_blue"></span>\n                        <div class="tag">\n                      <span class="tag__item tag__item_closer">\n                        <span class="tag__text">Менеджеры</span>\n                        <i class="i-closer"></i>\n                      </span>\n                            <span class="tag__item tag__item_closer">\n                        <span class="tag__text">Игорь Павлов</span>\n                      <i class="i-closer"></i>\n                      </span>\n                            <span class="tag__item tag__item_closer">\n                        <span class="tag__text">Стажеры</span>\n                      <i class="i-closer"></i>\n                      </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
      plain: true,
      scope: $scope
    });
  };
  $scope.openConfirm = function () {
    ngDialog.openConfirm({
      className: 'ngdialog_normal  ngdialog-theme-default',
      template: '<div class="ng-dialog__wrapper">\n <p class="title">Удалить раздел: Распространители</p> <p class="description">Все материалы из этого раздела буду перенесены в:</p> <div class="category__item category__item_drop category__item_input"><input class="input" type="text" placeholder="Type here" value="Неотсортированное" readonly="true"><div class="i-arrow i-arrow_to_down"></div></div><div class="category__footer  category__footer_justify-center"><button class="button button_success" type="button">Сохранить</button></div>\n</div>',
      plain: true,
      scope: $scope
    }).then(function (value) {
      console.log('Modal promise resolved. Value: ', value);
    }, function (reason) {
      console.log('Modal promise rejected. Reason: ', reason);
    });
  };

  $scope.openCrop = function () {
    ngDialog.openConfirm({
      className: 'ngdialog ngdialog-theme-default ngdialog_half-width',
      template: '<div class="ng-dialog__wrapper">\n    <div class="ng-dialog__header header">\n        <p class="title">Фотография профиля</p>\n    </div>\n    <p class="description">Выберите область, каторая  будет отоброжаться  в вашем профиле.</p>\n    <div class="article article_modal">\n        <div class="content article__content">\n            <img src="interface/ava-crop.jpg" alt="">\n        </div>\n        <div class="sidebar">\n            <img src="interface/ava-post-crop.jpg" alt="">\n        </div>\n    </div>\n    <div class="ng-dialog__footer ng-dialog__footer_right">\n        <a href="#" class="link button button_success">Сохранить</a>\n    </div>\n</div>',
      plain: true,
      scope: $scope
    }).then(function (value) {
      console.log('Modal promise resolved. Value: ', value);
    }, function (reason) {
      console.log('Modal promise rejected. Reason: ', reason);
    });
  };
  $scope.openConfirmEmployer = function () {
    ngDialog.openConfirm({
      className: 'ngdialog_normal  ngdialog-theme-default',
      template: '<div class="ng-dialog__wrapper">\n <p class="title">Удалить должность: Designer</p> <p class="description">Сотрудникам будет назначена должность:</p> <div class="category__item category__item_drop category__item_input"><input class="input" type="text" placeholder="Type here" value="Агент" readonly="true"><div class="i-arrow i-arrow_to_down"></div></div><div class="category__footer  category__footer_justify-center"><button class="button button_success" type="button">Сохранить</button></div>\n</div>',
      plain: true,
      scope: $scope
    }).then(function (value) {
      console.log('Modal promise resolved. Value: ', value);
    }, function (reason) {
      console.log('Modal promise rejected. Reason: ', reason);
    });
  };
}]);