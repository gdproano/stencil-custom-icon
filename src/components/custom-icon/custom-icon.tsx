import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'custom-icon',
  styleUrl: 'custom-icon.css',
  shadow: true,
})

export class CustomIcon implements ComponentInterface {
  @Element() iconElement: HTMLElement;
  /**
   * The color of the icon
   */
  @Prop({
    reflect: true
  }) color: string = "black";
  /**
   * The name of the icon
   */
  @Prop() name: string;
  /**
   * The size of the icon
   */
  @Prop() size: string = "medium";

  private icon: HTMLElement;

  componentDidLoad(){
    this.icon.style.color = this.color;
  }

  render() {
    return (
      <Host>
        <i class={`icon icon-${this.name} ${this.size}`}  ref={el => this.icon = el as HTMLInputElement}></i>
      </Host>
    );
  }

}
