<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Item extends Migration
{
    public function up()
    {
		$this->forge->addField([
			'id' => [
				'type' => 'INT',
				'constraint' => 5,
				'auto_increment' => true
			],
            'item_type' => [
				'type' => 'VARCHAR',
				'constraint' => 200,
			],
			'item_desc' => [
				'type' => 'VARCHAR',
				'constraint' => 500,
            ],
            'quantity' => [
				'type' => 'INT',
				'constraint' => 12,
			],
            'unit_price' => [
				'type' => 'INT',
				'constraint' => 12,
			],
            'amount' => [
				'type' => 'INT',
				'constraint' => 12,
			]
		]);
		$this->forge->addKey('id', true);
		$this->forge->createTable('tb_unit');
	}

    public function down()
    {
        //
    }
}
