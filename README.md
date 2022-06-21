# customizable-accordion-component

React Accordion Component

[![NPM version][npm-image]][npm-url]

[npm-url]: https://www.npmjs.com/package/customizable-accordion-component

<!-- ## Screenshot

![](https://t.alipayobjects.com/images/rmsweb/T1bWpgXgBaXXXXXXXX.png) -->

<!-- ## Example

online example: http://react-component.github.io/dropdown/examples/ -->

## Usage

```js
// import
import { Accordion } from 'customizable-accordion-component';

const Component = () => {
    return (
        <div>
            <Accordion onChangeStatus={(status) => setState(status)}>
                <Accordion.Item label="Vegetables">
                    <div style={{ background: 'red', padding: '20px' }}>Vegetables</div>
                </Accordion.Item>
                <Accordion.Item label="Fruits">
                    <div style={{ background: 'red', padding: '20px' }}>Fruits</div>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
```

## API

### Accordion PROPS

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>multipleOpen</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Open multiple Accordions at the same time</td>
        </tr>
        <tr>
          <td>onChangeStatus</td>
          <td>Function</td>
          <td>(status) => void;</td>
          <td>Call when status of accordion changed</td>
        </tr>
        <tr>
          <td>initialOpen</td>
          <td>Array</td>
          <td>[null]</td>
          <td>On load accordion is open. It can be multiple accordions e.g. [0,1,2]</td>
        </tr>
    </tbody>
</table>

## Accordion Item PROPS

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>label</td>
          <td>String</td>
          <td></td>
          <td>The name of the label</td>
        </tr>
    </tbody>
</table>

## Development

```
npm install customizable-accordion-component
```

## License

customizable-accordion-component is released under the MIT license.
