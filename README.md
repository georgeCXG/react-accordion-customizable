# react-accordion-customizable

React Accordion Customizable

> Simple Customizable React Accordion Component

## Screenshot

![](https://t.alipayobjects.com/images/rmsweb/T1bWpgXgBaXXXXXXXX.png) -->

## Example

![Example](https://media3.giphy.com/media/jpyk9H0eFUR9jU9PKJ/giphy.gif?cid=790b76110b2cd1359552211dcd78f38768bf1f9d30c930be&rid=giphy.gif&ct=g)

## Install

```bash
npm install --save react-accordion-customizable
```

## Usage

```jsx
import { Accordion } from 'customizable-accordion-component';

const Component = () => {
    return (
        <div>
            <Accordion onChangeStatus={(status) => setState(status)}>
                <Accordion.Item label="Label_1">
                    <Component />
                </Accordion.Item>
                <Accordion.Item label="Label_2">
                    <Component />
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
```

## Props

### Accordion Props

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
        <tr>
          <td>labelPosition</td>
          <td>String</td>
          <td>'start'</td>
          <td>Justify position, options ['start','end','between','center']</td>
        </tr>
        <tr>
          <td>labelReverse</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Reverse the inital position</td>
        </tr>
        <tr>
          <td>iconsLeft</td>
          <td>Array</td>
          <td>[null]</td>
          <td>Multiple icons on the left side as [<Icon1/>,<Icon2>]</td>
        </tr>
        <tr>
          <td>iconsRight</td>
          <td>Array</td>
          <td>[null]</td>
          <td>Multiple icons on the right side as [<Icon1/>,<Icon2>]</td>
        </tr>
        <tr>
          <td>iconSize</td>
          <td>Number</td>
          <td>20</td>
          <td>Size of the initial icon</td>
        </tr>
        <tr>
          <td>secondaryIcon</td>
          <td>JSX.Element</td>
          <td>null</td>
          <td>Secondary Icon</td>
        </tr>
        <tr>
          <td>removeDefaultIcon</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Remove the initial default icon</td>
        </tr>
        <tr>
          <td>removeAnimation</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Remove the default animation</td>
        </tr>
        <tr>
          <td>transitionAnimation</td>
          <td>Number</td>
          <td>200</td>
          <td>Duration of the animation in MS</td>
        </tr>
        <tr>
          <td>removeAnimationIcon</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Remove the initial animation on default icon</td>
        </tr>
        <tr>
          <td>style</td>
          <td>CSS</td>
          <td>null</td>
          <td>Adds styling on item accordion</td>
        </tr>
    </tbody>
</table>

## License

react-accordion-customizable is released under the MIT license.
