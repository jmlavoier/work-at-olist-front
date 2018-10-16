export class Component {
  constructor(props = {}) {
    this.childrenComponents = [];
    this.props = props;
    this.state = {};

    this.events = [];
    this.listeners = [];

    this.componentWillMount();
    this.render();
    this.componentDidMount();
    this.subscribeEvents();
    this.executeListeners({}, this.state);
  }

  componentWillMount() {}
  componentDidMount() {}
  render() {}

  setState(state) {
    let nextState = {};
    const previousState = { ...this.state };

    if (typeof state === 'function') {
      nextState = { ...state(this.state) };
    } else {
      nextState = { ...state };
    }

    this.state = {
      ...previousState,
      ...nextState,
    }

    this.executeListeners(previousState, this.state);
  }

  executeListeners(previousState, nextState) {
    this.listeners.forEach(listener => listener(previousState, nextState));
  }

  eventHandler(componentEvent) {
    return (event) => {
      componentEvent(event);
    }
  }

  subscribeEvents() {
    this.events.forEach((componentEvents) => {
      const { el, events } = componentEvents;
      const eventsName = Object.keys(events);

      if (!el) {
        return;
      }

      eventsName.forEach((event) => {
        el.addEventListener(event, this.eventHandler(events[event]), true);
      });
    });
  }

  getRandomId() {
    return `${parseInt(123456 * Math.random(), 10)}`;
  }

  getChildComponentRefByName(name) {
    const [compRef] = this.childrenComponents.filter(
      (componentRef) => componentRef.child.name === name
    );

    if (compRef) {
      return compRef;
    }

    return null;
  }

  template(strings, ...children) {
    let str = '';
    this.childrenComponents = [];

    const templateString = strings.reduce((html, item, index) => {
      const child = children[index];

      if (child && child.component && typeof child.component === 'function') {
        const childComponent = new child.component(child.props);

        if (childComponent instanceof Component) {
          const componentRef = this.getChildComponentRefByName(child.name) || {
            id: `tmp-${this.getRandomId()}`,
            child: {
              ...child,
              component: childComponent,
            },
          };

          this.childrenComponents.push(componentRef);
          return `${html} ${item} <span id="${componentRef.id}"></span>`;
        }
      }

      if (typeof child === 'boolean') {
        return `${html} ${item}`;
      }

      if (typeof child === 'array') {
        throw new Error('Component doesn\'t support array as child');
      }

      if (typeof child === 'number') {
        return `${html} ${item} ${child.toString() || ''}`;
      }

      return `${html} ${item} ${child || ''}`;
    }, '');

    const html = document.createElement('div');
    html.innerHTML = templateString;
    this.element = html.firstElementChild;
  }

  getElement() {
    return this.element;
  }

  renderChildrenComponents() {
    this.childrenComponents.forEach((componentRef) => {

      const tmpSpan = this.element.querySelector(`#${componentRef.id}`);
      if (tmpSpan && tmpSpan.parentElement) {
        const { childNodes } = tmpSpan.parentElement;
        for (let index = 0; index <= childNodes.length; index += 1) {
          if (childNodes[index] && childNodes[index].id === componentRef.id) {
            childNodes[index].replaceWith(componentRef.child.component.getElement());
            componentRef.child.component.renderChildrenComponents();
          }
        }
      }
    });
  }

  renderRoot(root) {
    root.appendChild(this.element);
    if (this.childrenComponents.length) {
      this.renderChildrenComponents();
    }
  }
}

export const prepareComponent = component => (name, props) => {
  if (!name) {
    throw new Error('Component should have name to be prepared');
  }

  return {
    name,
    props,
    component,
  };
}