import { Input } from 'react-rainbow-components';

export const InputsComponent = ({label, required, maxLength, value, disabled, onChange, type, id, name, msj, autoComplete}) => {
    return (
        <div className="mb-3">
            <Input label={label} labelAlignment="left" required={required} maxLength={maxLength} autoComplete={autoComplete}
            value={value} disabled={disabled} onChange={onChange} type={type} id={id} name={name} 
            />
            {msj}
        </div>
    );
};