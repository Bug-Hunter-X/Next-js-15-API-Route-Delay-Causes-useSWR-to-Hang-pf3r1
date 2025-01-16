```javascript
// pages/api/data.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Simulate a delay to reproduce the issue
    setTimeout(() => {
      res.status(200).json({ data: 'Some data' });
    }, 3000);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```
```javascript
// components/MyComponent.js
import useSWR from 'swr';

function MyComponent() {
  const { data, error } = useSWR('/api/data');

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return <div>Data: {data.data}</div>;
  }
}
export default MyComponent; 
```