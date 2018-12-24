# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Web::PatientsController do
  describe '#index' do
    subject { get :index }

    let!(:patient) { create(:patient) }

    it do
      is_expected.to have_http_status(:ok)
      expect(response_json).to have_key(:patients)
      expect(response_json[:patients]).not_to be_empty
      expect(response_json[:patients].map { |p| p[:id] }).to match_array([patient.id])
    end
  end

  describe '#create' do
    subject { post :create, params: { patient: patient_attrs }, as: :json }

    let(:patient_attrs) { attributes_for(:patient) }

    it do
      expect { subject }.to change(Patient, :exists?)
      is_expected.to have_http_status(:ok)
    end
  end
end
