# Kuki

Short description and motivation.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'kuki', github: 'lctdnl/kuki'
```

### Require JS

```
//= require kuki/cookie_consent.min
//= require kuki/cookie_consent_init
//= require kuki/cookie_consent_helper
```

### Require CSS

```
@import 'kuki/cookie_consent';
```

### Init Cookie consent banner

`options` is the cookie_consent's options hash and is optional

```
$(document).on('turbolinks:load', function () {
  init_kuki(options)
});
```

## Usage

### Inside JS

```
if (cookies_allowed()) {
  // execute code
}
```


## Inside Ruby/Rails

```
if cookies_allowed?
  # execute code
end
```

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
