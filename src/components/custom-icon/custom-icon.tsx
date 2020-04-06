import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'custom-icon',
  styleUrl: 'custom-icon.css',
  shadow: true,
})
export class CustomIcon implements ComponentInterface {
  /**
   * The name of the icon
   */
  @Prop() name: string;
  /**
   * The size of the icon
   */
  @Prop() size: string;

  render() {
    return (
      <Host>
        <ion-icon name={this.name} size={this.size}></ion-icon>
      </Host>
    );
  }

}
