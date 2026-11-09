# @quartz-community/spacer

A component plugin that renders a flexible spacer element that pushes adjacent components apart within a layout group. It uses CSS `flex: 2 1 auto` to fill available space, making it useful for spacing out items in toolbars or sidebars (for example, separating the search bar from the darkmode toggle in the left sidebar toolbar).

## Installation

```bash
npx quartz plugin add @quartz-community/spacer
```

The spacer is already in Quartz's default configuration.

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source: "@quartz-community/spacer"
    enabled: true
    options: {}
    order: 25
    layout:
      position: left
      priority: 25
      display: mobile-only
```

## Configuration

This plugin has no configuration options.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/Spacer) for more information.

## License

MIT
