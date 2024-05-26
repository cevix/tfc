import { db , producto, usuario} from 'astro:db';

// https://astro.build/db/seed


export default async function seed(){
	await db.insert(producto).values([
		{	nombreProducto:'Asus ZenScreen Touch',descripcion:'Monitor con pantalla IPS y tactil.Es muy pequeño e incluso portable  para llevarlo mas comodo a donde quieras.Viene ioncluido con soporte para poder llevarlo protegido.',precio:'80',img:'https://i.ibb.co/wc23SbS/monitor.jpg',tipo:'monitor',autor:'illojuan',estado:'nuevo'
		},
		{	nombreProducto:'Logitech G915 LIGHTSPEED',descripcion:'Uno de los mejores teclados de logitech con un gran diseño ergonomico',precio:'23',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		}
		,
		{	nombreProducto:'Logitech G203',descripcion:'raton nuevo en con botones laterales a estrenar ',precio:'40',img:'https://i.ibb.co/S0HQ0xf/logitehc.jpg',tipo:'raton',autor:'cevix20000',estado:'nuevo'
		}
		,
		{	nombreProducto:'Corsair VOID ELITE',descripcion:'Auriculas con un microfono perfecto paera la llamadas en discord.Facil de ajustar ',precio:'50',img:'https://i.ibb.co/xFwhVkQ/auriculares.jpg',tipo:'auriculares',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Gigabyte GeForce RTX 4060 ',descripcion:'Una targeta grafica de ultima generacion  y la version windforce.Tiene DLSS3 con conexion GDDR6 y 8GB de memoria ram',precio:'40',img:'https://i.ibb.co/M8zDwZh/targeta-Grafica.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech POP',descripcion:'Raton pequeño pero muy bonito de color rosa',precio:'60',img:'https://i.ibb.co/S0HQ0xf/logitehc.jpg',tipo:'raton',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech Pro X',descripcion:'Los mejores auriculares del mercado para jugar con sonido envovente.Cuenta cin un microfono extraible',precio:'200',img:'https://i.ibb.co/xFwhVkQ/auriculares.jpg',tipo:'auriculares',autor:'cevix20000',estado:'nuevo'
		},
		
		{	nombreProducto:'Logitech MK295',descripcion:'Un teclado inalambrico de membrana silencioso',precio:'25',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'WD Blue SA510',descripcion:'MEmoria ssd  SATA 3 formateado cpon un año de uso.Se incluye los cables para conectarlo a la placa base',precio:'20',img:'https://i.ibb.co/ncfwjT3/ssd2.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Zotac Gaming GeForce GTX 1650',descripcion:'Tiene varios 5 años con el,no se le ha nunca mantenimiento.Tiene 4GB de memoria ram y tiene la conexion GDDR6. ',precio:'79',img:'https://i.ibb.co/M8zDwZh/targeta-Grafica.jpg',tipo:'componete',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech G512',descripcion:'Un teclado mecanico con un formato adecuado para los gamer, y con RGB.No se le ha dado mucho uso',precio:'40',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'LG 27GR95QE-B 26.5"',descripcion:'Monitor como nuevo no se ha usado mucho.Tiene un tiempo de respuesta muy buena, perfecto para ser un buen jugador en el valorant',precio:'40',img:'https://i.ibb.co/wc23SbS/monitor.jpg',tipo:'monitor',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech G502',descripcion:'Auriculas imposible de romper',precio:'80',img:'https://i.ibb.co/S0HQ0xf/logitehc.jpg',tipo:'raton',autor:'cevix20000',estado:'nuevo'
		},
		
		{	nombreProducto:'Samsung Essential Monitor LS27C310EAUXEN 27"',descripcion:'Un moniotor con pantalla ips y con 75 hz.Es  ideal para los diseñadores graficos',precio:'115',img:'https://i.ibb.co/wc23SbS/monitor.jpg',tipo:'monitor',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'WD Black 2TB',descripcion:'Memoria de water digital M.2 completamente nuevo sin usar de cuarta generación ',precio:'130',img:'https://i.ibb.co/ncfwjT3/ssd2.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Logitech K380',descripcion:'Un teclado inalambrico de color rosa con color.Es muy compacto para poder llevarlo con facilidad a cualquier parte.',precio:'32',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'AMD Ryzen 7 7800X3D',descripcion:'Procesador con año y medio de uso.Es de la septima generacion.Viene con procesador genrico de AMD y en su caja.Es un procesador muy potente para renderizar juegos',precio:'247',img:'https://i.ibb.co/t3bJpVj/procesador.jpg',tipo:'componete',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'AMD Ryzen 5 5500',descripcion:'Ryzen de la quinta generacion tiene 4 años de uso y funciona perfectamente.Se vende con la caja y el ventilador de AMD.',precio:'56',img:'https://i.ibb.co/t3bJpVj/procesador.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Samsung Odyssey',descripcion:'un monitor  de 32 pulgadas con frecuencia de 165 Hz con tecnologia freesync.La pantara del monitor es LED QHD y curvo',precio:'204',img:'https://i.ibb.co/wc23SbS/monitor.jpg',tipo:'monitor',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Corsair Vengeance RGB Pro ',descripcion:'Memoria ram de 16 GB cada uno con conexion DDR4 de frecuencia 3200.Estan casi nuevos ya que los he usado muy poco',precio:'40',img:'https://i.ibb.co/vZqGYcV/ram.jpg',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'logitech G713',descripcion:'Teclado de membrana de color blanco con reposabrazo incluido con forma de nube.El reposabrazo es muy comodo para las muñecas.',precio:'40',img:'https://i.ibb.co/CzCWg8j/teclado.jpg',tipo:'teclado',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Seagate BarraCuda 3.5 ',descripcion:'Disco tipo HDD de la gran marca barracuda con 2TB de memoria.Tiene dos años de uso y esta en buenas condiciones ',precio:'38',img:'https://i.ibb.co/ncfwjT3/ssd2.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Razer Barracuda X',descripcion:'Auriculas de la gran marca razer de colort rosa con un microfono extraible.Es inalambrico y tienen una bateria con autonomia de 20 horas',precio:'68',img:'https://i.ibb.co/xFwhVkQ/auriculares.jpg',tipo:'auriculares',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'ASUS ProArt',descripcion:'Monitor con varios años de uso.Tiene 34 pulgadas con una pantalla ips con una frecuencia de 120 Hz con tecnologia freeSync',precio:'168',img:'https://i.ibb.co/wc23SbS/monitor.jpg',tipo:'monitor',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Corsair Vengeance LPX ',descripcion:'Ram de 16 GB cada uno sin luces  con conexion DDR4.La frecuencia es de 4200Hz una velocidad muy buena para correr el fornite',precio:'56',img:'https://i.ibb.co/vZqGYcV/ram.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Samsung ViewFinity S9',descripcion:'Un monitor curvo de 49 pulgadas.El monitor tiene el tamaño de dos monitores juntos y con altavoces incorporados',precio:'500',img:'https://i.ibb.co/wc23SbS/monitor.jpg',tipo:'monitor',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'MSI MPG B550 GAMING PLUS',descripcion:'Placa base ideal para montar un ordenador gamer compatible con los procesadores de la última generación de intel.Vine con todos sus cables sata para conectar los dicscos duros y los tornillos y soporte para los procesadores',precio:'42',img:'https://i.ibb.co/mFHd55S/placa-Base.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'ASUS PRIME Z790-P WIFI ',descripcion:'Una de las mejores placas que hay y con una gran estetica increible y de color blanco.Tienen incorporado en la placa el wifi y bluetooth',precio:'80',img:'https://i.ibb.co/mFHd55S/placa-Base.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Astro Gaming A50',descripcion:'Los mejores cascos inalambricos para el gaming con una bateria muy duraadera.Son unos auriculares muy comodos  y con la que se puede pasar varias horas puestas.Son compatibles con targetas de sonido usb,perfecto para los steaming en twich',precio:'160',img:'https://i.ibb.co/xFwhVkQ/auriculares.jpg',tipo:'auriculares',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Forgeon Azoth 360 ARGB',descripcion:'Refigerion ligida  de 360 mm.ES muy grande ideal para torres grandres y procesadores que se calientan mucho',precio:'62',img:'https://i.ibb.co/PmKFkXV/refigeracion-Liquida.png',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Memoria RAM Kingston FURY Beast',descripcion:'Dos memporia Ram con unj total de 16GB(2 x 8GB).Tiene una frecuencia de 6000Hz con conexion DDR5.',precio:'90',img:'https://i.ibb.co/vZqGYcV/ram.jpg',tipo:'periferico',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'MSI GeForce RTX 3060 VENTUS 2X',descripcion:'Una targeta garica con gddr6 tiene dos ventiladores.Es la version overclock y con 3 puertos display port y uno de hdmi.Tiene un año de uso.',precio:'275',img:'https://i.ibb.co/M8zDwZh/targeta-Grafica.jpg',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		}
		,
		{	nombreProducto:'logitech G435',descripcion:'Auriculas imposible de romper',precio:'36',img:'https://i.ibb.co/xFwhVkQ/auriculares.jpg',tipo:'auricular',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'Intel Core i7-14700K',descripcion:'VEnde este procesador de intel de decimacuarta generacion esta en su caja sin abrir,cviene con un regalado que dan en pccomponets.Tiene garantia de 2 años',precio:'480',img:'https://i.ibb.co/t3bJpVj/procesador.jpg',tipo:'componete',autor:'cevix20000',estado:'nuevo'
		},
		{	nombreProducto:'MSI MAG CORELIQUID M240 ',descripcion:'Refigeracion liquida in one con dos ventiladores y viene con luces RGB.Es pequeño ,muy ideal para ordenadores de tamaño medio.',precio:'79',img:'https://i.ibb.co/PmKFkXV/refigeracion-Liquida.png',tipo:'componente',autor:'cevix20000',estado:'nuevo'
		},
		
	])

	await db.insert(usuario).values([
		{
			nombreusuario:"illojuan",
			urlFotousuario:"https://static-cdn.jtvnw.net/jtv_user_pictures/7db7d061-fe1f-4641-bc0e-37288e8ed419-profile_image-150x150.png",
			emailusuario:"Papuillo@gmail.com",
		  },
		  {
			nombreusuario:"djmariio",
			urlFotousuario:"https://static-cdn.jtvnw.net/jtv_user_pictures/7db7d061-fe1f-4641-bc0e-37288e8ed419-profile_image-150x150.png",
			emailusuario:"marioGamer@gmail.com",
		  },
		  {
			nombreusuario:"pewdiepie",
			urlFotousuario:"https://static-cdn.jtvnw.net/jtv_user_pictures/7db7d061-fe1f-4641-bc0e-37288e8ed419-profile_image-150x150.png",
			emailusuario:"pewdiepie",
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