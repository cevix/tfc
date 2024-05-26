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




// https://astro.build/db/config
export default defineDb({
  tables: {producto},
});
