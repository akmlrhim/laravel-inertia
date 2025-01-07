<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
	/** @use HasFactory<\Database\Factories\TaskFactory> */
	use HasFactory;

	protected $with = ['project', 'assignedUser', 'updatedBy', 'createdBy'];

	public function project(): BelongsTo
	{
		return $this->belongsTo(Project::class);
	}

	public function assignedUser(): BelongsTo
	{
		return $this->belongsTo(User::class, 'created_by');
	}

	public function updatedBy(): BelongsTo
	{
		return $this->belongsTo(User::class, 'updated_by');
	}

	public function createdBy(): BelongsTo
	{
		return $this->belongsTo(User::class, 'created_by');
	}
}
