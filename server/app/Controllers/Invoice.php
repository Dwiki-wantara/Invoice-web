<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\InvoiceModel;

class Invoice extends ResourceController
{
	/**
	 * Return an array of resource objects, themselves in array format
	 *
	 * @return mixed
	 */
	use ResponseTrait;
	public function index()
	{
		$model = new InvoiceModel();
		$data = $model->findAll();
		if(!$data) return $this->failNotFound('Data Tidak Ditemukan');
		return $this->respond($data);
	}

	/**
	 * Return the properties of a resource object
	 *
	 * @return mixed
	 */
	public function show($id = null)
	{
		$model = new InvoiceModel();
		$data = $model->find(['id' => $id]);
		if(!$data) return $this->failNotFound('Data Tidak Ditemukan');
		return $this->respond($data[0]);
	}


	/**
	 * Create a new resource object, from "posted" parameters
	 *
	 * @return mixed
	 */
	public function create()
	{
		$json = $this->request->getJSON();
		$data = [
			'invoice_id' => $json->invoice_id,
			'issue_date' => $json->issue_date,
			'due_date' => $json->due_date,
			'subject' => $json->subject,
			'from_name' => $json->from_name,
			'from_desc' => $json->from_desc,
			'to_name' => $json->to_name,
			'to_desc' => $json->to_desc
		];
		$model = new InvoiceModel();
		$product = $model->insert($data);
		if(!$product) return $this->fail('Gagal tersimpan', 400);
		return $this->respondCreated($product);
	}


	/**
	 * Add or update a model resource, from "posted" properties
	 *
	 * @return mixed
	 */
	public function update($id = null)
	{
		$json = $this->request->getJSON();
		$data = [
			'invoice_id' => $json->invoice_id,
			'issue_date' => $json->issue_date,
			'due_date' => $json->due_date,
			'subject' => $json->subject,
			'from_name' => $json->from_name,
			'from_desc' => $json->from_desc,
			'to_name' => $json->to_name,
			'to_desc' => $json->to_desc
		];
		$model = new InvoiceModel();
		$cekId = $model->find(['id' => $id]);
		if(!$cekId) return $this->fail('Data Tidak ditemukan', 404);
		$product = $model->update($id, $data);
		if(!$product) return $this->fail('Gagal terupdate', 400);
		return $this->respond($product);
	}

	/**
	 * Delete the designated resource object from the model
	 *
	 * @return mixed
	 */
	public function delete($id = null)
	{
		$model = new InvoiceModel();
		$cekId = $model->find(['id' => $id]);
		if(!$cekId) return $this->fail('Data Tidak ditemukan', 404);
		$product = $model->delete($id);
		if(!$product) return $this->fail('Gagal terhapus', 400);
		return $this->respondDeleted('Data Berhasil Terhapus');
	}
}
