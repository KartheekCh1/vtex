# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.5] - 2018-05-21
### Fixed
- Fix pages dependency to be able to use `ExntesionContainer` again. 
- `Topbar` when scrolled overlapped the `VTEX-topbar`.

## [0.3.4] - 2018-05-19
### Changed
- Update version of `vtex.storecomponents` to 1.x

## [0.3.3] - 2018-05-18
### Added
- Add toast message system to be used on error scenarios.

### Fixed
- Fix padding top of product page content

## [0.3.2] - 2018-05-18
### Fixed
- Top menus covering great portion of the page.
- Fix pages error when ExtensionContainer was used.

## [0.3.1] - 2018-05-12
### Fixed
- Display category menu only in large screens.
- Fix padding-top of Product page.

## [0.3.0] - 2018-05-12
### Added
- Add category menu and fix padding.
- Add the search bar component and make header responsive again.

### Fixed
- Fix minicart div position
- Remove flex box from product page to fix non-expected behavior of react-slick

## [0.2.0] - 2018-05-11
### Added
- Show success toast when a product is add to the cart.
- Add responsive layout to the header.
- Add gallery to the search page.

## [0.1.0] - 2018-05-11
### Added
- Add the search bar component

### Changed
- Replace own Footer implementation by `vtex.storecomponents/Footer` component.

## [0.0.11] - 2018-05-09
### Added
- Add Product Details app. 

### Deprecated
- Remove legacy implementations of buy button and minicart.

## [0.0.10] - 2018-05-09
### Added
- Add Minicart app.

## [0.0.9] - 2018-05-07
### Added
- Add Menu app on top bar.

### Deprecated
- Remove the own implementation of shelf to add the app. 
