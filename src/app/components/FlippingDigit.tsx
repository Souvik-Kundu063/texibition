import React from 'react';
import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

interface FlippingDigitProps {
  value: number;
}

export class FlippingDigit extends React.Component<FlippingDigitProps> {
  private _tickRef = React.createRef<HTMLDivElement>();
  private _tickInstance: any;

  componentDidMount() {
    const { value } = this.props;
    if (this._tickRef.current) {
      this._tickInstance = Tick.DOM.create(this._tickRef.current, {
        value: value.toString().padStart(2, '0')
      });
      // Hide credits after initialization
      setTimeout(() => {
        const credits = this._tickRef.current?.querySelector('.tick-credits');
        if (credits) {
          (credits as HTMLElement).style.display = 'none';
        }
      }, 100);
    }
  }

  componentDidUpdate() {
    if (!this._tickInstance) return;
    this._tickInstance.value = this.props.value.toString().padStart(2, '0');
  }

  componentWillUnmount() {
    if (!this._tickInstance) return;
    Tick.DOM.destroy(this._tickRef.current);
  }

  render() {
    return (
      <>
        <style>{`
          .tick-credits { display: none !important; }
          .tick { font-size: 2rem; }
          @media (min-width: 480px) { .tick { font-size: 2.5rem; } }
          @media (min-width: 640px) { .tick { font-size: 3.5rem; } }
          @media (min-width: 768px) { .tick { font-size: 4.5rem; } }
          @media (min-width: 1024px) { .tick { font-size: 5.5rem; } }
          @media (min-width: 1280px) { .tick { font-size: 6rem; } }
          .tick-flip { transform: scale(1.1); margin: 0 0.2rem; }
          @media (min-width: 640px) { .tick-flip { transform: scale(1.2); margin: 0 0.25rem; } }
          @media (min-width: 768px) { .tick-flip { transform: scale(1.4); margin: 0 0.35rem; } }
          .tick-flip-card { width: 0.9em; height: 1.1em; }
          @media (min-width: 640px) { .tick-flip-card { width: 1em; height: 1.2em; } }
          @media (min-width: 768px) { .tick-flip-card { width: 1.1em; height: 1.4em; } }
        `}</style>
        <div ref={this._tickRef} className="tick">
          <div data-repeat="true" aria-hidden="true">
            <span data-view="flip">{this.props.value.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </>
    );
  }
}
