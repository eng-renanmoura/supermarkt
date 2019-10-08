package com.supermarkt.supermercado;

import org.springframework.data.jpa.repository.JpaRepository;

interface ItemRepositorio extends JpaRepository<Item, Long>  {

}
