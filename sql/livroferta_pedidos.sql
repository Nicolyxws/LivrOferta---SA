
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` enum('pendente','pago','enviado','cancelado') DEFAULT 'pendente',
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
)
