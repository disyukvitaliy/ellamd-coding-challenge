# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Web::Patients::PrescriptionsController do
  describe '#show' do
    subject { get :show, as: :json, params: { id: relation.prescription.id } }

    let!(:relation) { create :prescription_ingredient_relation }

    it do
      is_expected.to have_http_status(:ok)
      expect(response_json).to have_key(:prescription)
      expect(response_json[:prescription][:id]).to eq(relation.prescription.id)
      expect(response_json[:prescription]).to have_key(:ingredient_relations)
      expect(response_json[:prescription][:ingredient_relations]).not_to be_empty
    end
  end

  describe '#create' do
    subject { post :create, params: params, as: :json }

    let(:relation) { build :prescription_ingredient_relation }
    let(:ingredient_attrs) { { id: relation.ingredient.id, percentage: relation.percentage } }
    let(:prescription_attrs) { { ingredients: [ingredient_attrs] } }
    let(:params) {
      { patient_id: relation.prescription.patient_id,  prescription: prescription_attrs }
    }

    it do
      expect { subject }.to change(Prescription, :exists?)
      is_expected.to have_http_status(:ok)
    end
  end
end
