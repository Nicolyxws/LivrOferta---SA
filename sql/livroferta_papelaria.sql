CREATE TABLE `papelaria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `preco` decimal(10,2) NOT NULL,
  `estoque` int DEFAULT '0',
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
  
  ALTER TABLE papelaria
  ADD COLUMN status ENUM('pendente', 'pago', 'enviado', 'cancelado') NOT NULL DEFAULT 'pendente';
  )

