import {getBrowser} from './getBrowser';

test('Get exception when try run not available browser', async () => {
     await expect(getBrowser("Amigo", {})).rejects.toThrow(Error);
});