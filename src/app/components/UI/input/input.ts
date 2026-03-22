import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, input, output, signal, viewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  placeholder = input<string>('');
  type = input<string>('text');

  value = signal('');
  disabled = signal(false);
  focused = output<boolean>();

  inputRef = viewChild<ElementRef<HTMLInputElement>>('inputEl');

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  focus(): void {
    this.inputRef()?.nativeElement.focus();
  }

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value.set(val);
    this.onChange(val);
  }

  onFocus(): void {
    this.focused.emit(true);
  }

  onBlur(): void {
    this.onTouched();
    this.focused.emit(false);
  }

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}