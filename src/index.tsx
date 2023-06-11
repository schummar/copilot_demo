import { createRoot } from 'react-dom/client';
import { BusinessCardWidget } from './02_components/businessCardWidget';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl!);
root.render(<BusinessCardWidget
    businessCard={{
        name: "John Doe",
        phone: "555-555-5555",
        email: "john@doe.com",
        joinedOn: new Date('2020-01-01'),
    }}
/>);