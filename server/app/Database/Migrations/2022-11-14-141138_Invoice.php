<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Invoice extends Migration
{
    public function up()
    {
		$this->forge->addField([
			'id' => [
				'type' => 'INT',
				'constraint' => 5,
				'auto_increment' => true
			],
            'invoice_id' => [
				'type' => 'INT',
				'constraint' => 12,
			],
			'issue_date' => [
				'type' => 'date',
			],
            'due_date' => [
				'type' => 'date',
			],
			'subject' => [
				'type' => 'VARCHAR',
				'constraint' => 200,
			],
            'from_name' => [
				'type' => 'VARCHAR',
				'constraint' => 200,
			],
			'from_desc' => [
				'type' => 'VARCHAR',
				'constraint' => 500,
			],
            'to_name' => [
				'type' => 'VARCHAR',
				'constraint' => 200,
			],
            'to_desc' => [
				'type' => 'VARCHAR',
				'constraint' => 500,
			]
		]);
		$this->forge->addKey('id', true);
		$this->forge->createTable('tb_invoice');
	}

    public function down()
    {
        //
    }
}
