import Email from '@auth/core/providers/email';
import { defineDb,defineTable,column} from 'astro:db';

const producto = defineTable({
  columns:{
    nombreProducto:column.text(),
    descripcion:column.text(),
    precio:column.text(),
    img:column.text(),
    tipo:column.text(),
    autor:column.text(),
    estado:column.text(),
  }
}) 


const usuario = defineTable({
  columns:{
    nombreusuario:column.text(),
    urlFotousuario:column.text(),
    emailusuario:column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {producto,usuario},
});
