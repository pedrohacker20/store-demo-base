

const regiones = [
    { id: 1000, nombre: "Región Metropolitana de Santiago" },
    { id: 2000, nombre: "Tarapacá" },
    { id: 3000, nombre: "Antofagasta" },
    { id: 4000, nombre: "Atacama" },
    { id: 5000, nombre: "Coquimbo" },
    { id: 6000, nombre: "Valparaíso" },
    { id: 7000, nombre: "Región del Libertador Gral. Bernardo O’Higgins" },
    { id: 8000, nombre: "Región del Maule" },
    { id: 9000, nombre: "Región del Biobío" },
    { id: 10000, nombre: "Región de la Araucanía" },
    { id: 11000, nombre: "Región de Los Ríos" },
    { id: 12000, nombre: "Región de Los Lagos" },
    { id: 13000, nombre: "Región Aisén del Gral. Carlos Ibáñez del Campo" },
    { id: 14000, nombre: "Región de Magallanes y de la Antártica Chilena" },
    { id: 15000, nombre: "Arica y Parinacota" },
    { id: 16000, nombre: "Región de Ñuble" }
];

const comunas = [
    { id: 1001, nombre: "Cerrillos", id_region: 1000 },
    { id: 1002, nombre: "Cerro Navia", id_region: 1000 },
    { id: 1003, nombre: "Conchalí", id_region: 1000 },
    { id: 1004, nombre: "El Bosque", id_region: 1000 },
    { id: 1005, nombre: "Estación Central", id_region: 1000 },
    { id: 1006, nombre: "Huechuraba", id_region: 1000 },
    { id: 1007, nombre: "Independencia", id_region: 1000 },
    { id: 1008, nombre: "La Cisterna", id_region: 1000 },
    { id: 1009, nombre: "La Florida", id_region: 1000 },
    { id: 1010, nombre: "La Granja", id_region: 1000 },
    { id: 1011, nombre: "La Pintana", id_region: 1000 },
    { id: 1012, nombre: "La Reina", id_region: 1000 },
    { id: 1013, nombre: "Las Condes", id_region: 1000 },
    { id: 1014, nombre: "Lo Barnechea", id_region: 1000 },
    { id: 1015, nombre: "Lo Espejo", id_region: 1000 },
    { id: 1016, nombre: "Lo Prado", id_region: 1000 },
    { id: 1017, nombre: "Macul", id_region: 1000 },
    { id: 1018, nombre: "Maipú", id_region: 1000 },
    { id: 1019, nombre: "Ñuñoa", id_region: 1000 },
    { id: 1020, nombre: "Pedro Aguirre Cerda", id_region: 1000 },
    { id: 1021, nombre: "Peñalolén", id_region: 1000 },
    { id: 1022, nombre: "Providencia", id_region: 1000 },
    { id: 1023, nombre: "Pudahuel", id_region: 1000 },
    { id: 1024, nombre: "Quilicura", id_region: 1000 },
    { id: 1025, nombre: "Quinta Normal", id_region: 1000 },
    { id: 1026, nombre: "Recoleta", id_region: 1000 },
    { id: 1027, nombre: "Renca", id_region: 1000 },
    { id: 1028, nombre: "Santiago", id_region: 1000 },
    { id: 1029, nombre: "San Joaquín", id_region: 1000 },
    { id: 1030, nombre: "San Miguel", id_region: 1000 },
    { id: 1031, nombre: "San Ramón", id_region: 1000 },
    { id: 1032, nombre: "Vitacura", id_region: 1000 },
    { id: 1033, nombre: "Puente Alto", id_region: 1000 },
    { id: 1034, nombre: "Pirque", id_region: 1000 },
    { id: 1035, nombre: "San José de Maipo", id_region: 1000 },
    { id: 1036, nombre: "Colina", id_region: 1000 },
    { id: 1037, nombre: "Lampa", id_region: 1000 },
    { id: 1038, nombre: "Tiltil", id_region: 1000 },
    { id: 1039, nombre: "San Bernardo", id_region: 1000 },
    { id: 1040, nombre: "Buin", id_region: 1000 },
    { id: 1041, nombre: "Calera de Tango", id_region: 1000 },
    { id: 1042, nombre: "Paine", id_region: 1000 },
    { id: 1043, nombre: "Melipilla", id_region: 1000 },
    { id: 1044, nombre: "Alhué", id_region: 1000 },
    { id: 1045, nombre: "Curacaví", id_region: 1000 },
    { id: 1046, nombre: "María Pinto", id_region: 1000 },
    { id: 1047, nombre: "San Pedro", id_region: 1000 },
    { id: 1048, nombre: "Talagante", id_region: 1000 },
    { id: 1049, nombre: "El Monte", id_region: 1000 },
    { id: 1050, nombre: "Isla de Maipo", id_region: 1000 },
    { id: 1051, nombre: "Padre Hurtado", id_region: 1000 },
    { id: 1052, nombre: "Peñaflor", id_region: 1000 },
    { id: 2001, nombre: "Iquique", id_region: 2000 },
    { id: 2002, nombre: "Alto Hospicio", id_region: 2000 },
    { id: 2003, nombre: "Pozo Almonte", id_region: 2000 },
    { id: 2004, nombre: "Camiña", id_region: 2000 },
    { id: 2005, nombre: "Colchane", id_region: 2000 },
    { id: 2006, nombre: "Huara", id_region: 2000 },
    { id: 2007, nombre: "Pica", id_region: 2000 },
    { id: 3001, nombre: "Antofagasta", id_region: 3000 },
    { id: 3002, nombre: "Mejillones", id_region: 3000 },
    { id: 3003, nombre: "Sierra Gorda", id_region: 3000 },
    { id: 3004, nombre: "Taltal", id_region: 3000 },
    { id: 3005, nombre: "Calama", id_region: 3000 },
    { id: 3006, nombre: "Ollagüe", id_region: 3000 },
    { id: 3007, nombre: "San Pedro de Atacama", id_region: 3000 },
    { id: 3008, nombre: "Tocopilla", id_region: 3000 },
    { id: 3009, nombre: "María Elena", id_region: 3000 },
    { id: 4001, nombre: "Copiapó", id_region: 4000 },
    { id: 4002, nombre: "Caldera", id_region: 4000 },
    { id: 4003, nombre: "Tierra Amarilla", id_region: 4000 },
    { id: 4004, nombre: "Chañaral", id_region: 4000 },
    { id: 4005, nombre: "Diego de Almagro", id_region: 4000 },
    { id: 4006, nombre: "Vallenar", id_region: 4000 },
    { id: 4007, nombre: "Alto del Carmen", id_region: 4000 },
    { id: 4008, nombre: "Freirina", id_region: 4000 },
    { id: 4009, nombre: "Huasco", id_region: 4000 },
    { id: 5001, nombre: "La Serena", id_region: 5000 },
    { id: 5002, nombre: "Coquimbo", id_region: 5000 },
    { id: 5003, nombre: "Andacollo", id_region: 5000 },
    { id: 5004, nombre: "La Higuera", id_region: 5000 },
    { id: 5005, nombre: "Paiguano", id_region: 5000 },
    { id: 5006, nombre: "Vicuña", id_region: 5000 },
    { id: 5007, nombre: "Illapel", id_region: 5000 },
    { id: 5008, nombre: "Canela", id_region: 5000 },
    { id: 5009, nombre: "Los Vilos", id_region: 5000 },
    { id: 5010, nombre: "Salamanca", id_region: 5000 },
    { id: 5011, nombre: "Ovalle", id_region: 5000 },
    { id: 5012, nombre: "Combarbalá", id_region: 5000 },
    { id: 5013, nombre: "Monte Patria", id_region: 5000 },
    { id: 5014, nombre: "Punitaqui", id_region: 5000 },
    { id: 5015, nombre: "Río Hurtado", id_region: 5000 },
    { id: 6001, nombre: "Valparaíso", id_region: 6000 },
    { id: 6002, nombre: "Casablanca", id_region: 6000 },
    { id: 6003, nombre: "Concón", id_region: 6000 },
    { id: 6004, nombre: "Juan Fernández", id_region: 6000 },
    { id: 6005, nombre: "Puchuncaví", id_region: 6000 },
    { id: 6006, nombre: "Quintero", id_region: 6000 },
    { id: 6007, nombre: "Viña del Mar", id_region: 6000 },
    { id: 6008, nombre: "Isla de Pascua", id_region: 6000 },
    { id: 6009, nombre: "Los Andes", id_region: 6000 },
    { id: 6010, nombre: "Calle Larga", id_region: 6000 },
    { id: 6011, nombre: "Rinconada", id_region: 6000 },
    { id: 6012, nombre: "San Esteban", id_region: 6000 },
    { id: 6013, nombre: "La Ligua", id_region: 6000 },
    { id: 6014, nombre: "Cabildo", id_region: 6000 },
    { id: 6015, nombre: "Papudo", id_region: 6000 },
    { id: 6016, nombre: "Petorca", id_region: 6000 },
    { id: 6017, nombre: "Zapallar", id_region: 6000 },
    { id: 6018, nombre: "Quillota", id_region: 6000 },
    { id: 6019, nombre: "Calera", id_region: 6000 },
    { id: 6020, nombre: "Hijuelas", id_region: 6000 },
    { id: 6021, nombre: "La Cruz", id_region: 6000 },
    { id: 6022, nombre: "Nogales", id_region: 6000 },
    { id: 6023, nombre: "San Antonio", id_region: 6000 },
    { id: 6024, nombre: "Algarrobo", id_region: 6000 },
    { id: 6025, nombre: "Cartagena", id_region: 6000 },
    { id: 6026, nombre: "El Quisco", id_region: 6000 },
    { id: 6027, nombre: "El Tabo", id_region: 6000 },
    { id: 6028, nombre: "Santo Domingo", id_region: 6000 },
    { id: 6029, nombre: "San Felipe", id_region: 6000 },
    { id: 6030, nombre: "Catemu", id_region: 6000 },
    { id: 6031, nombre: "Llaillay", id_region: 6000 },
    { id: 6032, nombre: "Panquehue", id_region: 6000 },
    { id: 6033, nombre: "Putaendo", id_region: 6000 },
    { id: 6034, nombre: "Santa María", id_region: 6000 },
    { id: 6035, nombre: "Quilpué", id_region: 6000 },
    { id: 6036, nombre: "Limache", id_region: 6000 },
    { id: 6037, nombre: "Olmué", id_region: 6000 },
    { id: 6038, nombre: "Villa Alemana", id_region: 6000 },
    { id: 7001, nombre: "Rancagua", id_region: 7000 },
    { id: 7002, nombre: "Codegua", id_region: 7000 },
    { id: 7003, nombre: "Coinco", id_region: 7000 },
    { id: 7004, nombre: "Coltauco", id_region: 7000 },
    { id: 7005, nombre: "Doñihue", id_region: 7000 },
    { id: 7006, nombre: "Graneros", id_region: 7000 },
    { id: 7007, nombre: "Las Cabras", id_region: 7000 },
    { id: 7008, nombre: "Machalí", id_region: 7000 },
    { id: 7009, nombre: "Malloa", id_region: 7000 },
    { id: 7010, nombre: "San Francisco de Mostazal", id_region: 7000 },
    { id: 7011, nombre: "Olivar", id_region: 7000 },
    { id: 7012, nombre: "Peumo", id_region: 7000 },
    { id: 7013, nombre: "Pichidegua", id_region: 7000 },
    { id: 7014, nombre: "Quinta de Tilcoco", id_region: 7000 },
    { id: 7015, nombre: "Rengo", id_region: 7000 },
    { id: 7016, nombre: "Requínoa", id_region: 7000 },
    { id: 7017, nombre: "San Vicente de Tagua Tagua", id_region: 7000 },
    { id: 7018, nombre: "Pichilemu", id_region: 7000 },
    { id: 7019, nombre: "La Estrella", id_region: 7000 },
    { id: 7020, nombre: "Litueche", id_region: 7000 },
    { id: 7021, nombre: "Marchihue", id_region: 7000 },
    { id: 7022, nombre: "Navidad", id_region: 7000 },
    { id: 7023, nombre: "Paredones", id_region: 7000 },
    { id: 7024, nombre: "San Fernando", id_region: 7000 },
    { id: 7025, nombre: "Chépica", id_region: 7000 },
    { id: 7026, nombre: "Chimbarongo", id_region: 7000 },
    { id: 7027, nombre: "Lolol", id_region: 7000 },
    { id: 7028, nombre: "Nancagua", id_region: 7000 },
    { id: 7029, nombre: "Palmilla", id_region: 7000 },
    { id: 7030, nombre: "Peralillo", id_region: 7000 },
    { id: 7031, nombre: "Placilla", id_region: 7000 },
    { id: 7032, nombre: "Pumanque", id_region: 7000 },
    { id: 7033, nombre: "Santa Cruz", id_region: 7000 },
    { id: 8001, nombre: "Talca", id_region: 8000 },
    { id: 8002, nombre: "Constitución", id_region: 8000 },
    { id: 8003, nombre: "Curepto", id_region: 8000 },
    { id: 8004, nombre: "Empedrado", id_region: 8000 },
    { id: 8005, nombre: "Maule", id_region: 8000 },
    { id: 8006, nombre: "Pelarco", id_region: 8000 },
    { id: 8007, nombre: "Pencahue", id_region: 8000 },
    { id: 8008, nombre: "Río Claro", id_region: 8000 },
    { id: 8009, nombre: "San Clemente", id_region: 8000 },
    { id: 8010, nombre: "San Rafael", id_region: 8000 },
    { id: 8011, nombre: "Cauquenes", id_region: 8000 },
    { id: 8012, nombre: "Chanco", id_region: 8000 },
    { id: 8013, nombre: "Pelluhue", id_region: 8000 },
    { id: 8014, nombre: "Curicó", id_region: 8000 },
    { id: 8015, nombre: "Hualañé", id_region: 8000 },
    { id: 8016, nombre: "Licantén", id_region: 8000 },
    { id: 8017, nombre: "Molina", id_region: 8000 },
    { id: 8018, nombre: "Rauco", id_region: 8000 },
    { id: 8019, nombre: "Romeral", id_region: 8000 },
    { id: 8020, nombre: "Sagrada Familia", id_region: 8000 },
    { id: 8021, nombre: "Teno", id_region: 8000 },
    { id: 8022, nombre: "Vichuquén", id_region: 8000 },
    { id: 8023, nombre: "Linares", id_region: 8000 },
    { id: 8024, nombre: "Colbún", id_region: 8000 },
    { id: 8025, nombre: "Longaví", id_region: 8000 },
    { id: 8026, nombre: "Parral", id_region: 8000 },
    { id: 8027, nombre: "Retiro", id_region: 8000 },
    { id: 8028, nombre: "San Javier de Loncomilla", id_region: 8000 },
    { id: 8029, nombre: "Villa Alegre", id_region: 8000 },
    { id: 8030, nombre: "Yerbas Buenas", id_region: 8000 },
    { id: 9001, nombre: "Concepción", id_region: 9000 },
    { id: 9002, nombre: "Coronel", id_region: 9000 },
    { id: 9003, nombre: "Chiguayante", id_region: 9000 },
    { id: 9004, nombre: "Florida", id_region: 9000 },
    { id: 9005, nombre: "Hualqui", id_region: 9000 },
    { id: 9006, nombre: "Lota", id_region: 9000 },
    { id: 9007, nombre: "Penco", id_region: 9000 },
    { id: 9008, nombre: "San Pedro de la Paz", id_region: 9000 },
    { id: 9009, nombre: "Santa Juana", id_region: 9000 },
    { id: 9010, nombre: "Talcahuano", id_region: 9000 },
    { id: 9011, nombre: "Tomé", id_region: 9000 },
    { id: 9012, nombre: "Hualpén", id_region: 9000 },
    { id: 9013, nombre: "Lebu", id_region: 9000 },
    { id: 9014, nombre: "Arauco", id_region: 9000 },
    { id: 9015, nombre: "Cañete", id_region: 9000 },
    { id: 9016, nombre: "Contulmo", id_region: 9000 },
    { id: 9017, nombre: "Curanilahue", id_region: 9000 },
    { id: 9018, nombre: "Los Álamos", id_region: 9000 },
    { id: 9019, nombre: "Tirúa", id_region: 9000 },
    { id: 9020, nombre: "Los Ángeles", id_region: 9000 },
    { id: 9021, nombre: "Antuco", id_region: 9000 },
    { id: 9022, nombre: "Cabrero", id_region: 9000 },
    { id: 9023, nombre: "Laja", id_region: 9000 },
    { id: 9024, nombre: "Mulchén", id_region: 9000 },
    { id: 9025, nombre: "Nacimiento", id_region: 9000 },
    { id: 9026, nombre: "Negrete", id_region: 9000 },
    { id: 9027, nombre: "Quilaco", id_region: 9000 },
    { id: 9028, nombre: "Quilleco", id_region: 9000 },
    { id: 9029, nombre: "San Rosendo", id_region: 9000 },
    { id: 9030, nombre: "Santa Bárbara", id_region: 9000 },
    { id: 9031, nombre: "Tucapel", id_region: 9000 },
    { id: 9032, nombre: "Yumbel", id_region: 9000 },
    { id: 9033, nombre: "Alto Biobío", id_region: 9000 },
    { id: 10001, nombre: "Temuco", id_region: 10000 },
    { id: 10002, nombre: "Carahue", id_region: 10000 },
    { id: 10003, nombre: "Cunco", id_region: 10000 },
    { id: 10004, nombre: "Curarrehue", id_region: 10000 },
    { id: 10005, nombre: "Freire", id_region: 10000 },
    { id: 10006, nombre: "Galvarino", id_region: 10000 },
    { id: 10007, nombre: "Gorbea", id_region: 10000 },
    { id: 10008, nombre: "Lautaro", id_region: 10000 },
    { id: 10009, nombre: "Loncoche", id_region: 10000 },
    { id: 10010, nombre: "Melipeuco", id_region: 10000 },
    { id: 10011, nombre: "Nueva Imperial", id_region: 10000 },
    { id: 10012, nombre: "Padre las Casas", id_region: 10000 },
    { id: 10013, nombre: "Perquenco", id_region: 10000 },
    { id: 10014, nombre: "Pitrufquén", id_region: 10000 },
    { id: 10015, nombre: "Pucón", id_region: 10000 },
    { id: 10016, nombre: "Saavedra", id_region: 10000 },
    { id: 10017, nombre: "Teodoro Schmidt", id_region: 10000 },
    { id: 10018, nombre: "Toltén", id_region: 10000 },
    { id: 10019, nombre: "Vilcún", id_region: 10000 },
    { id: 10020, nombre: "Villarrica", id_region: 10000 },
    { id: 10021, nombre: "Cholchol", id_region: 10000 },
    { id: 10022, nombre: "Angol", id_region: 10000 },
    { id: 10023, nombre: "Collipulli", id_region: 10000 },
    { id: 10024, nombre: "Curacautín", id_region: 10000 },
    { id: 10025, nombre: "Ercilla", id_region: 10000 },
    { id: 10026, nombre: "Lonquimay", id_region: 10000 },
    { id: 10027, nombre: "Los Sauces", id_region: 10000 },
    { id: 10028, nombre: "Lumaco", id_region: 10000 },
    { id: 10029, nombre: "Purén", id_region: 10000 },
    { id: 10030, nombre: "Renaico", id_region: 10000 },
    { id: 10031, nombre: "Traiguén", id_region: 10000 },
    { id: 10032, nombre: "Victoria", id_region: 10000 },
    { id: 11001, nombre: "Valdivia", id_region: 11000 },
    { id: 11002, nombre: "Corral", id_region: 11000 },
    { id: 11003, nombre: "Lanco", id_region: 11000 },
    { id: 11004, nombre: "Los Lagos", id_region: 11000 },
    { id: 11005, nombre: "Máfil", id_region: 11000 },
    { id: 11006, nombre: "Mariquina", id_region: 11000 },
    { id: 11007, nombre: "Paillaco", id_region: 11000 },
    { id: 11008, nombre: "Panguipulli", id_region: 11000 },
    { id: 11009, nombre: "La Unión", id_region: 11000 },
    { id: 11010, nombre: "Futrono", id_region: 11000 },
    { id: 11011, nombre: "Lago Ranco", id_region: 11000 },
    { id: 11012, nombre: "Río Bueno", id_region: 11000 },
    { id: 12001, nombre: "Puerto Montt", id_region: 12000 },
    { id: 12002, nombre: "Calbuco", id_region: 12000 },
    { id: 12003, nombre: "Cochamó", id_region: 12000 },
    { id: 12004, nombre: "Fresia", id_region: 12000 },
    { id: 12005, nombre: "Frutillar", id_region: 12000 },
    { id: 12006, nombre: "Los Muermos", id_region: 12000 },
    { id: 12007, nombre: "Llanquihue", id_region: 12000 },
    { id: 12008, nombre: "Maullín", id_region: 12000 },
    { id: 12009, nombre: "Puerto Varas", id_region: 12000 },
    { id: 12010, nombre: "Castro", id_region: 12000 },
    { id: 12011, nombre: "Ancud", id_region: 12000 },
    { id: 12012, nombre: "Chonchi", id_region: 12000 },
    { id: 12013, nombre: "Curaco de Vélez", id_region: 12000 },
    { id: 12014, nombre: "Dalcahue", id_region: 12000 },
    { id: 12015, nombre: "Puqueldón", id_region: 12000 },
    { id: 12016, nombre: "Queilén", id_region: 12000 },
    { id: 12017, nombre: "Quellón", id_region: 12000 },
    { id: 12018, nombre: "Quemchi", id_region: 12000 },
    { id: 12019, nombre: "Quinchao", id_region: 12000 },
    { id: 12020, nombre: "Osorno", id_region: 12000 },
    { id: 12021, nombre: "Puerto Octay", id_region: 12000 },
    { id: 12022, nombre: "Purranque", id_region: 12000 },
    { id: 12023, nombre: "Puyehue", id_region: 12000 },
    { id: 12024, nombre: "Río Negro", id_region: 12000 },
    { id: 12025, nombre: "San Juan de la Costa", id_region: 12000 },
    { id: 12026, nombre: "San Pablo", id_region: 12000 },
    { id: 12027, nombre: "Chaitén", id_region: 12000 },
    { id: 12028, nombre: "Futaleufú", id_region: 12000 },
    { id: 12029, nombre: "Hualaihué", id_region: 12000 },
    { id: 12030, nombre: "Palena", id_region: 12000 },
    { id: 13001, nombre: "Coihaique", id_region: 13000 },
    { id: 13002, nombre: "Lago Verde", id_region: 13000 },
    { id: 13003, nombre: "Aisén", id_region: 13000 },
    { id: 13004, nombre: "Cisnes", id_region: 13000 },
    { id: 13005, nombre: "Guaitecas", id_region: 13000 },
    { id: 13006, nombre: "Cochrane", id_region: 13000 },
    { id: 13007, nombre: "O’Higgins", id_region: 13000 },
    { id: 13008, nombre: "Tortel", id_region: 13000 },
    { id: 13009, nombre: "Chile Chico", id_region: 13000 },
    { id: 13010, nombre: "Río Ibáñez", id_region: 13000 },
    { id: 14001, nombre: "Punta Arenas", id_region: 14000 },
    { id: 14002, nombre: "Laguna Blanca", id_region: 14000 },
    { id: 14003, nombre: "Río Verde", id_region: 14000 },
    { id: 14004, nombre: "San Gregorio", id_region: 14000 },
    { id: 14005, nombre: "Cabo de Hornos (Ex Navarino)", id_region: 14000 },
    { id: 14006, nombre: "Antártica", id_region: 14000 },
    { id: 14007, nombre: "Porvenir", id_region: 14000 },
    { id: 14008, nombre: "Primavera", id_region: 14000 },
    { id: 14009, nombre: "Timaukel", id_region: 14000 },
    { id: 14010, nombre: "Natales", id_region: 14000 },
    { id: 14011, nombre: "Torres del Paine", id_region: 14000 },
    { id: 15001, nombre: "Arica", id_region: 15000 },
    { id: 15002, nombre: "Camarones", id_region: 15000 },
    { id: 15003, nombre: "Putre", id_region: 15000 },
    { id: 15004, nombre: "General Lagos", id_region: 15000 },
    { id: 16001, nombre: "Cobquecura", id_region: 16000 },
    { id: 16002, nombre: "Coelemu", id_region: 16000 },
    { id: 16003, nombre: "Ninhue", id_region: 16000 },
    { id: 16004, nombre: "Portezuelo", id_region: 16000 },
    { id: 16005, nombre: "Quirihue", id_region: 16000 },
    { id: 16006, nombre: "Ránquil", id_region: 16000 },
    { id: 16007, nombre: "Treguaco", id_region: 16000 },
    { id: 16008, nombre: "Bulnes", id_region: 16000 },
    { id: 16009, nombre: "Chillán Viejo", id_region: 16000 },
    { id: 16010, nombre: "Chillán", id_region: 16000 },
    { id: 16011, nombre: "El Carmen", id_region: 16000 },
    { id: 16012, nombre: "Pemuco", id_region: 16000 },
    { id: 16013, nombre: "Pinto", id_region: 16000 },
    { id: 16014, nombre: "Quillón", id_region: 16000 },
    { id: 16015, nombre: "San Ignacio", id_region: 16000 },
    { id: 16016, nombre: "Yungay", id_region: 16000 },
    { id: 16017, nombre: "Coihueco", id_region: 16000 },
    { id: 16018, nombre: "Ñiquén", id_region: 16000 },
    { id: 16019, nombre: "San Carlos", id_region: 16000 },
    { id: 16020, nombre: "San Fabián", id_region: 16000 },
    { id: 16021, nombre: "San Nicolás", id_region: 16000 }
];
