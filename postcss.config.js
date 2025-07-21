<<<<<<< HEAD
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
=======
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer()
  ],
};
>>>>>>> 77fae42b405fdc1ac6190b9556944310671f6c24
