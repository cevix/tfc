import { db , producto } from 'astro:db';

// https://astro.build/db/seed


export default async function seed(){
	await db.insert(producto).values([
		{	nombreProducto:'almadrullo',descripcion:'nunca sabre que es eso',precio:'12',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech G915 LIGHTSPEED',descripcion:'Uno de los mejores teclados de logitech con un gran diseño ergonomico',precio:'23',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		}
		,
		{	nombreProducto:'Logitech G203',descripcion:'raton nuevo en con botones laterales a estrenar ',precio:'40',img:'https://i.ibb.co/S0HQ0xf/logitehc.jpg',tipo:'raton',autor:'cevix20000',estado:'nuevo'
		}
		,
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		}
		,
		{	nombreProducto:'Corsair VOID ELITE',descripcion:'Auriculas con un microfono perfecto paera la llamadas en discord.Facil de ajustar ',precio:'50',img:'https://i.ibb.co/xFwhVkQ/auriculares.jpg',tipo:'auriculares',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech POP',descripcion:'Raton pequeño pero muy bonito de color rosa',precio:'60',img:'https://i.ibb.co/S0HQ0xf/logitehc.jpg',tipo:'raton',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech MK295',descripcion:'Un teclado inalambrico de membrana silencioso',precio:'25',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech Pro X',descripcion:'Los mejores auriculares del mercado para jugar con sonido envovente.Cuenta cin un microfono extraible',precio:'200',img:'https://i.ibb.co/xFwhVkQ/auriculares.jpg',tipo:'auriculares',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech G512',descripcion:'Un teclado mecanico con un formato adecuado para los gamer, y con RGB.No se le ha dado mucho uso',precio:'40',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech G502',descripcion:'Auriculas imposible de romper',precio:'80',img:'https://i.ibb.co/S0HQ0xf/logitehc.jpg',tipo:'raton',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech G305',descripcion:'Un raton muy liegero ideal para echar unas partiditas al lol',precio:'40',img:'https://i.ibb.co/S0HQ0xf/logitehc.jpg',tipo:'raton',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech K380',descripcion:'Un teclado inalambrico de color rosa con color.Es muy compacto para poder llevarlo con facilidad a cualquier parte.',precio:'32',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G713',descripcion:'Teclado de membrana de color blanco con reposabrazo incluido con forma de nube.El reposabrazo es muy comodo para las muñecas.',precio:'40',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'40',img:'foto',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		}
	])
}

/*
export default async function seed() {
	// TODO
	await db.insert(producto).values([
		{nombreProducto:'almadrullo',
			descripcion:'nunca sabre que es eso',
			precio:'12',
			img:'foto',
			tipo:'periferico',
			autor:'cevix20000',
			estado:'nuevo'
		}
	])

}*/