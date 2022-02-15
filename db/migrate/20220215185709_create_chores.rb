class CreateChores < ActiveRecord::Migration[6.1]
  def change
    create_table :chores do |t|
      t.string :description
      t.integer :difficulty

      t.timestamps
    end
  end
end
