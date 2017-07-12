'use strict';

define('front/tests/abilities/admin.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | abilities/admin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'abilities/admin.js should pass jshint.');
  });
});
define('front/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 12, col 12, \'Ember\' is not defined.\n\n1 error');
  });
});
define('front/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('front/tests/authenticators/oauth2.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authenticators/oauth2.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass jshint.');
  });
});
define('front/tests/authorizers/oauth2.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authorizers/oauth2.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/oauth2.js should pass jshint.');
  });
});
define('front/tests/components/load-more.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/load-more.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/load-more.js should pass jshint.\ncomponents/load-more.js: line 1, col 16, \'Ember\' is not defined.\n\n1 error');
  });
});
define('front/tests/components/model-selector.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/model-selector.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/model-selector.js should pass jshint.');
  });
});
define('front/tests/components/upload-file.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/upload-file.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/upload-file.js should pass jshint.\ncomponents/upload-file.js: line 39, col 26, \'t\' is not defined.\ncomponents/upload-file.js: line 52, col 9, \'$\' is not defined.\n\n2 errors');
  });
});
define('front/tests/controllers/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('front/tests/controllers/events/edit.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/events/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/events/edit.js should pass jshint.\ncontrollers/events/edit.js: line 2, col 34, Missing semicolon.\ncontrollers/events/edit.js: line 1, col 8, \'Ember\' is defined but never used.\n\n2 errors');
  });
});
define('front/tests/controllers/events/new.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/events/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/events/new.js should pass jshint.\ncontrollers/events/new.js: line 20, col 25, Missing semicolon.\n\n1 error');
  });
});
define('front/tests/controllers/events/show.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/events/show.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/events/show.js should pass jshint.\ncontrollers/events/show.js: line 2, col 34, Missing semicolon.\ncontrollers/events/show.js: line 1, col 8, \'Ember\' is defined but never used.\n\n2 errors');
  });
});
define('front/tests/controllers/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 40, col 37, \'occurrence\' is defined but never used.\ncontrollers/index.js: line 50, col 52, \'properties\' is defined but never used.\ncontrollers/index.js: line 50, col 40, \'occurrence\' is defined but never used.\ncontrollers/index.js: line 54, col 40, \'occurrence\' is defined but never used.\ncontrollers/index.js: line 20, col 21, \'moment\' is not defined.\ncontrollers/index.js: line 21, col 19, \'moment\' is not defined.\n\n6 errors');
  });
});
define('front/tests/controllers/login.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass jshint.');
  });
});
define('front/tests/controllers/tracts/edit.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/tracts/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/tracts/edit.js should pass jshint.\ncontrollers/tracts/edit.js: line 2, col 34, Missing semicolon.\ncontrollers/tracts/edit.js: line 1, col 8, \'Ember\' is defined but never used.\n\n2 errors');
  });
});
define('front/tests/controllers/tracts/new.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/tracts/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tracts/new.js should pass jshint.');
  });
});
define('front/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('front/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('front/tests/helpers/ember-cli-g-maps/register-async-helpers', ['exports', 'ember', 'front/tests/helpers/ember-cli-g-maps/select-autocomplete-place-helper', 'front/tests/helpers/ember-cli-g-maps/wait-for-google-map-helper', 'front/tests/helpers/ember-cli-g-maps/wait-for-geocode-requests-helper', 'front/tests/helpers/ember-cli-g-maps/stub-geocode-requests-helper'], function (exports, _ember, _frontTestsHelpersEmberCliGMapsSelectAutocompletePlaceHelper, _frontTestsHelpersEmberCliGMapsWaitForGoogleMapHelper, _frontTestsHelpersEmberCliGMapsWaitForGeocodeRequestsHelper, _frontTestsHelpersEmberCliGMapsStubGeocodeRequestsHelper) {
  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('selectPlace', function () {
      _ember['default'].Logger.warn('Please replace disabled helper "selectPlace" with "selectAutocompletePlace" helper.\nUsage details here: http://http://matt-jensen.github.io/ember-cli-g-maps/#/place-autocomplete/index');
    });
    _ember['default'].Test.registerAsyncHelper('selectAutocompletePlace', _frontTestsHelpersEmberCliGMapsSelectAutocompletePlaceHelper['default']);
    _ember['default'].Test.registerAsyncHelper('waitForGoogleMap', _frontTestsHelpersEmberCliGMapsWaitForGoogleMapHelper['default']);
    _ember['default'].Test.registerAsyncHelper('waitForGeocodeRequests', _frontTestsHelpersEmberCliGMapsWaitForGeocodeRequestsHelper['default']);
    _ember['default'].Test.registerAsyncHelper('stubGeocodeRequests', _frontTestsHelpersEmberCliGMapsStubGeocodeRequestsHelper['default']);
  };
});
define('front/tests/helpers/ember-cli-g-maps/select-autocomplete-place-helper', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.longPollExternalElement = longPollExternalElement;
  var $ = _ember['default'].$;
  var assert = _ember['default'].assert;

  var GAUTOCOMPLETE_CLASS = 'g-autocomplete';
  var GOOGLE_AUTOCOMPLETE_RESULTS = '.pac-container .pac-item';

  exports['default'] = function (app) {
    var requestedResult = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    var selector = arguments.length <= 2 || arguments[2] === undefined ? '.' + GAUTOCOMPLETE_CLASS : arguments[2];

    return new _ember['default'].Test.promise(function (resolve, reject) {

      // User only provided selector argument
      if (typeof requestedResult === 'string') {
        selector = requestedResult;
        requestedResult = 0;
      }

      longPollExternalElement(GOOGLE_AUTOCOMPLETE_RESULTS).then(function (autocompletePlaces) {
        var textResults = autocompletePlaces.map(function (i, el) {
          return $(el).text();
        });

        var _app$testHelpers$find = app.testHelpers.find(selector);

        var _app$testHelpers$find2 = _slicedToArray(_app$testHelpers$find, 1);

        var input = _app$testHelpers$find2[0];

        assert('No g-autocomplete component found for selector: ' + selector, input && $(input).hasClass(GAUTOCOMPLETE_CLASS));

        var targetResult = 0;

        /*
         * Set target to requested result if it exists
         */
        if (requestedResult > 0 && requestedResult <= textResults.length - 1) {
          targetResult = parseInt(requestedResult, 10);
        }

        /*
         * Keydown to requested result (40 = down arrow)
         */
        for (var i = 0; i <= targetResult; i++) {
          google.maps.event.trigger(input, 'keydown', { keyCode: 40 });
        }

        // Select active result (13 = Enter)
        google.maps.event.trigger(input, 'keydown', { keyCode: 13 });
        _ember['default'].run.later(function () {
          return resolve(textResults[targetResult]);
        }, 300);
      }, reject);
    });
  };

  function longPollExternalElement(selector) {
    return new _ember['default'].RSVP.Promise(function (resolve, reject) {
      var pollAgain = (function () {
        var counter = 0;

        return function () {
          /*
           * NOTE searching for elements potentially outside of #ember-testing container
           */
          var results = $(selector);

          if (results.length) {
            return resolve(results);
          }

          if (counter > 5) {
            return reject();
          }

          counter++;
          _ember['default'].run.later(pollAgain, 300);
        };
      })();

      pollAgain();
    });
  }

  ;
});
define("front/tests/helpers/ember-cli-g-maps/setup-test", ["exports"], function (exports) {
  exports["default"] = function () {};

  // TODO remove file @ v1
});
define('front/tests/helpers/ember-cli-g-maps/stub-geocode-requests-helper', ['exports', 'rsvp', 'ember', 'ember-owner/get', 'ember-metal/utils', 'ember-runloop'], function (exports, _rsvp, _ember, _emberOwnerGet, _emberMetalUtils, _emberRunloop) {
  exports.toPlaceResult = toPlaceResult;
  var Logger = _ember['default'].Logger;

  var ORIGINAL_GEOCODE = GMaps.prototype.geocode;
  var IS_PHANTOMJS_ENV = typeof window === 'object' && window.hasOwnProperty('_phantom');

  exports['default'] = function (app) {
    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var onlyPhantomJS = Boolean(config.onlyPhantomJS);

    // Abandon if only stubbing phantomJS
    if (onlyPhantomJS && IS_PHANTOMJS_ENV === false) {
      return;
    }

    (0, _emberMetalUtils.assert)('A results array is required', config.results && config.results instanceof Array && config.results.length);

    var stubs = undefined;
    if (config.results[0] instanceof Array) {
      // Clone 2 demensional array
      stubs = config.results.map(function (results) {
        return results.map(toPlaceResult);
      });
    } else {
      // Clone 1 demensional into 2 demensional array
      stubs = [config.results.map(toPlaceResult)];
    }

    (0, _emberMetalUtils.assert)('Geocode stubbed requests are still unresolved', ORIGINAL_GEOCODE === GMaps.prototype.geocode);

    var stubIndex = 0;

    /*
     * Stub GMaps geocode
     */
    GMaps.prototype.geocode = function geocodeStub(_ref) {
      var callback = _ref.callback;

      (0, _emberRunloop['default'])(function () {
        callback(stubs[stubIndex], 'OK');
        stubIndex += 1;

        if (stubIndex >= stubs.length) {
          GMaps.prototype.geocode = ORIGINAL_GEOCODE;
        }
      });
    };
  };

  function toPlaceResult(result) {
    var clone = (0, _emberMetalUtils.copy)(result, true);
    clone.geometry = clone.geometry || {};
    clone.geometry.location = clone.geometry.location || {};

    if (clone.hasOwnProperty('lat') && typeof clone.geometry.location.lat !== 'function') {
      clone.geometry.location.lat = function () {
        return clone.lat;
      };
    }

    if (clone.hasOwnProperty('lng') && typeof clone.geometry.location.lng !== 'function') {
      clone.geometry.location.lng = function () {
        return clone.lng;
      };
    }

    if (clone.hasOwnProperty('address') && !clone.formatted_address) {
      clone.formatted_address = clone.address;
    }

    return clone;
  }
});
define('front/tests/helpers/ember-cli-g-maps/wait-for-geocode-requests-helper', ['exports', 'rsvp', 'ember', 'ember-owner/get', 'ember-metal/utils'], function (exports, _rsvp, _ember, _emberOwnerGet, _emberMetalUtils) {
  var Logger = _ember['default'].Logger;

  exports['default'] = function (app) {
    var container = (0, _emberOwnerGet['default'])(app) || app.__container__;
    (0, _emberMetalUtils.assert)('failed to recover application container', container);

    var gMap = container.lookup && container.lookup('service:gMap');
    (0, _emberMetalUtils.assert)('gMap service lookup failed', gMap);

    return new _ember['default'].Test.promise(function (resolve, reject) {
      _ember['default'].Test.adapter.asyncStart();

      var queue = gMap._geocodeQueue || [];

      if (!queue.length) {
        Logger.warn('Geocode request queue was not found, or is currently empty');
      }

      return _rsvp['default'].Promise.all(queue).then(function () {
        _ember['default'].run.scheduleOnce('afterRender', null, resolve);
        _ember['default'].Test.adapter.asyncEnd();
      })['catch'](function () {
        reject();
        _ember['default'].Test.adapter.asyncEnd();
      });
    });
  };
});
define('front/tests/helpers/ember-cli-g-maps/wait-for-google-map-helper', ['exports', 'ember', 'ember-cli-g-maps/utils/load-google-maps'], function (exports, _ember, _emberCliGMapsUtilsLoadGoogleMaps) {
  var $ = _ember['default'].$;
  var assert = _ember['default'].assert;

  var EMBER_CLI_GMAPS_SELECTOR = '.ember-cli-g-map';

  exports['default'] = function (app) {
    var selector = arguments.length <= 1 || arguments[1] === undefined ? EMBER_CLI_GMAPS_SELECTOR : arguments[1];

    return new _ember['default'].Test.promise(function (resolve, reject) {
      _ember['default'].Test.adapter.asyncStart();

      (0, _emberCliGMapsUtilsLoadGoogleMaps['default'])().then(function () {
        _ember['default'].run.scheduleOnce('afterRender', function () {
          var $map = $(selector);
          assert('No g-maps component found at selector: ' + selector, !$map.length || !$map.eq(0).hasClass(EMBER_CLI_GMAPS_SELECTOR));

          google.maps.event.addListenerOnce($map.get(0).__GOOGLE_MAP__, 'tilesloaded', function () {
            _ember['default'].run(resolve);
            _ember['default'].Test.adapter.asyncEnd();
          });
        });
      })['catch'](function () {
        reject();
        _ember['default'].Test.adapter.asyncEnd();
      });
    });
  };
});
define('front/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('front/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'front/tests/helpers/start-app', 'front/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _frontTestsHelpersStartApp, _frontTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _frontTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _frontTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('front/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('front/tests/helpers/resolver', ['exports', 'front/resolver', 'front/config/environment'], function (exports, _frontResolver, _frontConfigEnvironment) {

  var resolver = _frontResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _frontConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _frontConfigEnvironment['default'].podModulePrefix
  };

  resolver.pluralizedTypes.ability = 'abilities';

  exports['default'] = resolver;
});
define('front/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('front/tests/helpers/start-app', ['exports', 'ember', 'front/app', 'front/config/environment'], function (exports, _ember, _frontApp, _frontConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _frontConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _frontApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('front/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('front/tests/integration/components/facebook-feed-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('facebook-feed', 'Integration | Component | facebook feed', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'L7WfU/w/',
      'block': '{"statements":[["append",["unknown",["facebook-feed"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'jlmeDjU0',
      'block': '{"statements":[["text","\\n"],["block",["facebook-feed"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('front/tests/integration/components/facebook-feed-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/facebook-feed-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/facebook-feed-test.js should pass jshint.');
  });
});
define('front/tests/integration/components/load-more-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('load-more', 'Integration | Component | load more', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'i7YAHCtI',
      'block': '{"statements":[["append",["unknown",["load-more"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '7wAM7C3F',
      'block': '{"statements":[["text","\\n"],["block",["load-more"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('front/tests/integration/components/load-more-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/load-more-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/load-more-test.js should pass jshint.');
  });
});
define('front/tests/integration/components/match-quiz-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('match-quiz', 'Integration | Component | match quiz', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'DLk6Dsxk',
      'block': '{"statements":[["append",["unknown",["match-quiz"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'vqNDiMUd',
      'block': '{"statements":[["text","\\n"],["block",["match-quiz"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('front/tests/integration/components/match-quiz-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/match-quiz-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/match-quiz-test.js should pass jshint.');
  });
});
define('front/tests/integration/components/model-selector-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('model-selector', 'Integration | Component | model selector', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'DNlwkM4U',
      'block': '{"statements":[["append",["unknown",["model-selector"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'YZ/oMjzs',
      'block': '{"statements":[["text","\\n"],["block",["model-selector"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('front/tests/integration/components/model-selector-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/model-selector-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/model-selector-test.js should pass jshint.');
  });
});
define('front/tests/integration/components/twitter-feed-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('twitter-feed', 'Integration | Component | twitter feed', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'nFwGeVa7',
      'block': '{"statements":[["append",["unknown",["twitter-feed"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'MHhWl7eK',
      'block': '{"statements":[["text","\\n"],["block",["twitter-feed"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('front/tests/integration/components/twitter-feed-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/twitter-feed-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/twitter-feed-test.js should pass jshint.');
  });
});
define('front/tests/integration/components/upload-file-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('upload-file', 'Integration | Component | upload file', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '7plDkPae',
      'block': '{"statements":[["append",["unknown",["upload-file"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'qDGyzXtH',
      'block': '{"statements":[["text","\\n"],["block",["upload-file"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('front/tests/integration/components/upload-file-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/upload-file-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/upload-file-test.js should pass jshint.');
  });
});
define('front/tests/integration/components/yes-no-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('yes-no', 'Integration | Component | yes no', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'iSQWY73Z',
      'block': '{"statements":[["append",["unknown",["yes-no"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'YRjf8EPx',
      'block': '{"statements":[["text","\\n"],["block",["yes-no"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('front/tests/integration/components/yes-no-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/yes-no-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/yes-no-test.js should pass jshint.');
  });
});
define('front/tests/mixins/candidates/save-model-mixin.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/candidates/save-model-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/candidates/save-model-mixin.js should pass jshint.');
  });
});
define('front/tests/mixins/events/save-model-mixin.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/events/save-model-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/events/save-model-mixin.js should pass jshint.');
  });
});
define('front/tests/mixins/roles/save-model-mixin.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/roles/save-model-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/roles/save-model-mixin.js should pass jshint.');
  });
});
define('front/tests/mixins/users/save-model-mixin.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/users/save-model-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/users/save-model-mixin.js should pass jshint.');
  });
});
define('front/tests/models/asset.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/asset.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/asset.js should pass jshint.');
  });
});
define('front/tests/models/event.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/event.js should pass jshint.');
  });
});
define('front/tests/models/user.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass jshint.');
  });
});
define('front/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('front/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('front/tests/routes/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('front/tests/routes/events/edit.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/events/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/events/edit.js should pass jshint.');
  });
});
define('front/tests/routes/events/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/events/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/events/index.js should pass jshint.');
  });
});
define('front/tests/routes/events/new.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/events/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/events/new.js should pass jshint.');
  });
});
define('front/tests/routes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 4, col 22, \'argument\' is defined but never used.\n\n1 error');
  });
});
define('front/tests/routes/login.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('front/tests/routes/users/edit.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/users/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/edit.js should pass jshint.');
  });
});
define('front/tests/routes/users/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/users/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/index.js should pass jshint.');
  });
});
define('front/tests/routes/users/new.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/users/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/new.js should pass jshint.');
  });
});
define('front/tests/services/session.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/session.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/session.js should pass jshint.');
  });
});
define('front/tests/test-helper', ['exports', 'front/tests/helpers/resolver', 'ember-qunit'], function (exports, _frontTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_frontTestsHelpersResolver['default']);
});
define('front/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('front/tests/unit/abilities/admin-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('ability:admin', 'Unit | Ability | admin', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var ability = this.subject();
    assert.ok(ability);
  });
});
define('front/tests/unit/abilities/admin-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/abilities/admin-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/abilities/admin-test.js should pass jshint.');
  });
});
define('front/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('front/tests/unit/adapters/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('front/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('front/tests/unit/controllers/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('front/tests/unit/controllers/elections/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:elections/edit', 'Unit | Controller | elections/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('front/tests/unit/controllers/elections/edit-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/elections/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/elections/edit-test.js should pass jshint.');
  });
});
define('front/tests/unit/controllers/elections/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:elections/new', 'Unit | Controller | elections/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('front/tests/unit/controllers/elections/new-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/elections/new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/elections/new-test.js should pass jshint.');
  });
});
define('front/tests/unit/controllers/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('front/tests/unit/controllers/login-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass jshint.');
  });
});
define('front/tests/unit/controllers/tracts/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:tracts/edit', 'Unit | Controller | tracts/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('front/tests/unit/controllers/tracts/edit-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/tracts/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/tracts/edit-test.js should pass jshint.');
  });
});
define('front/tests/unit/controllers/tracts/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:tracts/new', 'Unit | Controller | tracts/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('front/tests/unit/controllers/tracts/new-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/tracts/new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/tracts/new-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/alliance-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('alliance', 'Unit | Model | alliance', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/alliance-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/alliance-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/alliance-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/answer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('answer', 'Unit | Model | answer', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/answer-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/answer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/answer-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/asset-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('asset', 'Unit | Model | asset', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/asset-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/asset-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/asset-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/candidate-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('candidate', 'Unit | Model | candidate', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/candidate-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/candidate-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/candidate-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/category-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('category', 'Unit | Model | category', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/category-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/category-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/category-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/election-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('election', 'Unit | Model | election', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/election-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/election-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/election-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/election-type-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('election-type', 'Unit | Model | election type', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/election-type-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/election-type-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/election-type-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/gang-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('gang', 'Unit | Model | gang', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/gang-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/gang-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/gang-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/guest-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('guest', 'Unit | Model | guest', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/guest-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/guest-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/guest-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/math-candidate-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('math-candidate', 'Unit | Model | math candidate', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/math-candidate-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/math-candidate-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/math-candidate-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/position-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('position', 'Unit | Model | position', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/position-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/position-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/position-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/province-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('province', 'Unit | Model | province', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/province-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/province-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/province-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/question-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('question', 'Unit | Model | question', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/question-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/question-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/question-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/role-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('role', 'Unit | Model | role', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/role-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/role-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/role-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/roster-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('roster', 'Unit | Model | roster', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/roster-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/roster-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/roster-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/section-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('section', 'Unit | Model | section', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/section-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/section-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/section-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/town-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('town', 'Unit | Model | town', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/town-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/town-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/town-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/tract-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('tract', 'Unit | Model | tract', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/tract-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/tract-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tract-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/tract-type-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('tract-type', 'Unit | Model | tract type', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/tract-type-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/tract-type-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tract-type-test.js should pass jshint.');
  });
});
define('front/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('front/tests/unit/models/user-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/user-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/about-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/candidate/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:candidate/edit', 'Unit | Route | candidate/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/candidate/edit-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/candidate/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/candidate/edit-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/candidate/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:candidate/index', 'Unit | Route | candidate/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/candidate/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/candidate/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/candidate/index-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/candidate/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:candidate/new', 'Unit | Route | candidate/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/candidate/new-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/candidate/new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/candidate/new-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/candidates-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:candidates', 'Unit | Route | candidates', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/candidates-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/candidates-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/candidates-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/candidates/assemblymen-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:candidates/assemblymen', 'Unit | Route | candidates/assemblymen', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/candidates/assemblymen-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/candidates/assemblymen-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/candidates/assemblymen-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/candidates/presidents-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:candidates/presidents', 'Unit | Route | candidates/presidents', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/candidates/presidents-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/candidates/presidents-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/candidates/presidents-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/candidates/view-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:candidates/view', 'Unit | Route | candidates/view', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/candidates/view-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/candidates/view-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/candidates/view-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/login-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/methodology-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:methodology', 'Unit | Route | methodology', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/methodology-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/methodology-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/methodology-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/papeletas-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:papeletas', 'Unit | Route | papeletas', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/papeletas-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/papeletas-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/papeletas-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/result-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:result', 'Unit | Route | result', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/result-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/result-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/result-test.js should pass jshint.');
  });
});
define('front/tests/unit/routes/result/view-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:result/view', 'Unit | Route | result/view', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/result/view-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/result/view-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/result/view-test.js should pass jshint.');
  });
});
define('front/tests/unit/services/facebook-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:facebook', 'Unit | Service | facebook', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('front/tests/unit/services/facebook-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/facebook-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/facebook-test.js should pass jshint.');
  });
});
define('front/tests/unit/services/quiz-manager-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:quiz-manager', 'Unit | Service | quiz manager', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('front/tests/unit/services/quiz-manager-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/quiz-manager-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/quiz-manager-test.js should pass jshint.');
  });
});
define('front/tests/unit/services/session-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:session', 'Unit | Service | session', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('front/tests/unit/services/session-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/session-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/session-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('front/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
