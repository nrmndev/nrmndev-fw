export interface MouseEventHandlerProps<T> {
  onClick?: React.MouseEventHandler<T>;
  onDoubleClick?: React.MouseEventHandler<T>;
  onMouseDown?: React.MouseEventHandler<T>;
  onMouseUp?: React.MouseEventHandler<T>;
  onMouseMove?: React.MouseEventHandler<T>;
  onMouseEnter?: React.MouseEventHandler<T>;
  onMouseOver?: React.MouseEventHandler<T>;
  onMouseOut?: React.MouseEventHandler<T>;
}

export interface KeyboardEventHandlerProps<T> {
  onKeyDown?: React.KeyboardEventHandler<T>;
  onKeyUp?: React.KeyboardEventHandler<T>;
}
export interface FocusEventHandlerProps<T> {
  onFocus?: React.FocusEventHandler<T>;
  onBlur?: React.FocusEventHandler<T>;
}

export interface FormEventHandlerProps<T> {
  onChange?: React.ChangeEventHandler<T>;
  onInput?: React.FormEventHandler<T>;
  onSubmit?: React.FormEventHandler<T>;
  onReset?: React.FormEventHandler<T>;
  onInvalid?: React.FormEventHandler<T>;
}

interface AllEventHandlerProps<T>
  extends MouseEventHandlerProps<T>,
    KeyboardEventHandlerProps<T>,
    FocusEventHandlerProps<T> {}

export default AllEventHandlerProps;
