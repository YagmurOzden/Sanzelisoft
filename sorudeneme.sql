-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 04 Şub 2021, 20:21:58
-- Sunucu sürümü: 10.4.17-MariaDB
-- PHP Sürümü: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `deneme`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sorudeneme`
--

CREATE TABLE `sorudeneme` (
  `id` int(11) NOT NULL,
  `soru` varchar(100) NOT NULL,
  `cevap1` text NOT NULL,
  `cevap2` varchar(100) NOT NULL,
  `cevap3` varchar(100) NOT NULL,
  `cevap4` varchar(100) NOT NULL,
  `puan1` int(100) NOT NULL,
  `sira` int(100) NOT NULL,
  `puan2` int(11) NOT NULL,
  `puan3` int(11) NOT NULL,
  `puan4` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `sorudeneme`
--

INSERT INTO `sorudeneme` (`id`, `soru`, `cevap1`, `cevap2`, `cevap3`, `cevap4`, `puan1`, `sira`, `puan2`, `puan3`, `puan4`) VALUES
(13, 'Renk', 'Mavi', 'Kırmızı', 'Sarı', 'Turuncu', 2, 1, 3, 3, 5),
(14, 'Meyve', 'Kiraz', 'Çilek', 'Portakal', 'Ananas', 5, 2, 5, 3, 0),
(15, 'Film', 'Aksiyon', 'Macera', 'Komedi', 'Korku', 5, 3, 4, 5, 0),
(16, 'Dizi', 'Breaking Bad', 'Shooter', 'Daredevil', 'Iron Fist', 3, 4, 5, 3, 3);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `sorudeneme`
--
ALTER TABLE `sorudeneme`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `sorudeneme`
--
ALTER TABLE `sorudeneme`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
