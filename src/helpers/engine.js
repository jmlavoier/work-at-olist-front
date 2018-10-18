export class Component {
  constructor(props = {}) {
    this.childrenComponents = [];
    this.props = props;
    this.id = `${this.getRandomId()}`;
    this.state = {};
    this.isMounted = true;

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
  componentWillUnmount() {}
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

  unmountComponent() {
    if (this.isMounted) {
      this.componentWillUnmount();
      this.isMounted = false;

      if (this.parentComponent) {
        this.parentComponent.renderChildrenUnmontedComponents();
      }
    }
  }

  mountComponent() {
    this.componentWillMount();
    this.render();
    this.componentDidMount();
    this.subscribeEvents();
    this.executeListeners({}, this.state);
    this.isMounted = true;

    if (this.parentComponent) {
      this.parentComponent.renderChildrenComponents();
    }
  }

  getChildComponentRefByName(name) {
    const [compRef] = this.childrenComponents.filter(
      (componentRef) => componentRef.name === name
    );

    if (compRef) {
      return compRef;
    }

    return null;
  }

  getTmpSpan() {
    const tmpSpan = `<span id="tmp-${this.id}"></span>`;
    return this.parseElement(tmpSpan);
  }

  template(strings, ...children) {
    let str = '';
    this.childrenComponents = [];

    const templateString = strings.reduce((html, item, index) => {
      const child = children[index];

      if (child && child.component && typeof child.component === 'function') {
        const childComponent = new child.component(child.props);
        childComponent.parentComponent = this;

        if (childComponent instanceof Component) {
          const componentRef = this.getChildComponentRefByName(child.name) || {
            ...child,
            startedComponent: childComponent,
          };

          this.childrenComponents.push(componentRef);
          return `${html}${item} <span id="tmp-${componentRef.startedComponent.id}"></span>`;
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

      return `${html}${item}${child || ''}`;
    }, '');

    this.element = this.parseElement(templateString);
    this.element.id = `cmp-${this.id}`
  }

  parseElement(templateString) {
    const html = document.createElement('div');
    html.innerHTML = templateString;
    return html.firstElementChild;
  }

  getElement() {
    return this.element || '';
  }

  renderChildrenComponents() {
    this.childrenComponents.forEach((componentRef) => {
      if (componentRef.startedComponent.isMounted) {
        const tmpSpan = this.element.querySelector(`#tmp-${componentRef.startedComponent.id}`);

        if (tmpSpan) {
          tmpSpan.replaceWith(componentRef.startedComponent.getElement());
          componentRef.startedComponent.renderChildrenComponents();
        }
      }
    });
  }

  renderChildrenUnmontedComponents() {
    this.childrenComponents.forEach((componentRef) => {
      if (!componentRef.startedComponent.isMounted) {
        const compDOM = this.element.querySelector(`#cmp-${componentRef.startedComponent.id}`);

        if (compDOM) {
          compDOM.replaceWith(componentRef.startedComponent.getTmpSpan());
          componentRef.startedComponent.renderChildrenComponents();
        }
      }
    });
  }

  renderRoot(root) {
    root.appendChild(this.element);
    if (this.childrenComponents.length) {
      this.renderChildrenComponents();
      this.renderChildrenUnmontedComponents();
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

//For tests
export const mount = (Component) => {
  const html = document.createElement('div');
  Component.element.id = '';
  const spans = Component.element.querySelectorAll('span[id^="tmp-"]');
  if (spans) {
    for (let i = 0; i < spans.length; i++) {
      spans[i].id = '';
    }
  }
  html.appendChild(Component.element);
  return {
    el: html.firstElementChild,
    string: html.innerHTML,
  };
}