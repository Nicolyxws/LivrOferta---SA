CREATE TABLE `livros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `autor` varchar(150) NOT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `ano` int DEFAULT NULL,
  `preco` decimal(10,2) NOT NULL,
  `estoque` int DEFAULT '0',
  `descricao` text,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)

  ALTER TABLE livros
  ADD COLUMN status ENUM('pendente', 'pago', 'enviado', 'cancelado') NOT NULL DEFAULT 'pendente';
)